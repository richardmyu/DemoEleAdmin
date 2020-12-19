import request from '@/utils/request';

export function getList(params) {
  return request({
    url: '/dea/table/list',
    method: 'get',
    params
  })
}
