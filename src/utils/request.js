import axios from "axios"

import { Message, MessageBox } from "element-ui"

import store from '@/store'
import { getToken } from '@/utils/auth'
const service = axios.create({
  baseURL: process.env.NODE_ENV==="development"?process.env.VUE_APP_SERVER_URL:process.env.VUE_APP_PROD_URL,
  timeout: 5 * 1000
})
service.interceptors.request.use(
  config => {
    // 发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
    // 注意使用token的时候需要引入cookie方法或者用本地localStorage等方法，推荐js-cookie
    if (store.getters.token) {
      // config.params = {'token': token}    // 如果要求携带在参数中
      // config.headers.token = token;       // 如果要求携带在请求头中
      // bearer：w3c规范
      config.headers['Authorization'] = 'Bearer ' + getToken()
    }
    return config
  },
  error => {
    // do something with request error
    // console.log(error) // for debug
    return Promise.reject(error)
  }
)
// 设置跨域
service.defaults.withCredentials = false
service.interceptors.response.use(
  response => {
    const res = response.data

    if (res.code !== 200) {
      if (res.cod === 401 || res.code === 50012 || res.code === 50014) {
        MessageBox.confirm("会话失效,您可以留在此页面，或重新登录", "权限不足", {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          window.location.href = '#/login'
        })
      }
      else {
        Message({
          showClose: true,

          message: '' + res.message || "Error",
          type: 'error',
          duration: 3 * 1000
        })

      }
      return Promise.reject(new Error(res.message || "Error"))
    } else {
      return res;
    }

  },
  error => {
    Message({
      showClose: true,
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default service