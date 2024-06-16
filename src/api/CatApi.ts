import api from './index'

// 下面是简写的形式
// getXXX 自定义的接口名字
// export const getXXX = (params) => api.get(`/apigb/v1/component`, { params})
// export const postXXX = (params) => api.post(`/apigb/v1/component/update-info`, params)
 
 
// 下面是详细的写法
// export const xxxx = (params) => api({
//         url: '', // 请求地址
//         method: 'post', // 请求方式
//         params: params // 请求参数x
// })
