var client = require('scp2')
client.scp('dist', {  //本地目录是指打包路径
  host: '119.91.222.75',
  username: 'root',
  password: 'Aaa10247878',
  path: '/www/wwwroot/ahonge.com'
}, function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('文件上传完毕!点击访问http://119.91.222.75/')
  }
})