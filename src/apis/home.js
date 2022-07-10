import request from '@/views/utils/request'
export const getGedan = params => request({
    url: '/personalized',
    params
    // 将来外面可能传入params的值 {limit: 20}
})
export const getZuijia = params => request({
    url: '/personalized/newsong',
    params
    // 将来外面可能传入params的值 {limit: 20}
})