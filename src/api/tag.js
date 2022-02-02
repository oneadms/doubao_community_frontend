import request from "@/utils/request"
export function getHotTag(){
  return request({
    method:"get",
    url:"/tag/list"
  })
}
export function getTopicsByTag(paramMap) {
  return request({
    url: '/tag/' + paramMap.name,
    method: 'get',
    params: {
      page: paramMap.page,
      size: paramMap.size
    }
  })
}