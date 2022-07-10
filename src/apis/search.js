import request from '@/views/utils/request';
export const getSearchTag = (params) =>
  request({
    url: '/search/hot',
    params,
  });
  export function getSearchList (params) {
    return request({
      url: '/cloudsearch',
      params
    })
  }
