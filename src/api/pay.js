import request from '@/utils/request'

const userApi = {
    toPayAsPC: '/api/aliPay/toPayAsPC', // 支付接口
    wxPay: '/api/wxPay/toPayAsPC', // 微信支付接口
    getStudent: '/subscriptionsRecord/getSubscriptionsRecordById' // 根据ID查询学生征订记录
}

export function toPayAsPC (parameter) {
    return request({
        url: userApi.toPayAsPC,
        method: 'post',
        data: parameter
    })
}

export function getStudent (parameter) {
    return request({
        url: userApi.getStudent,
        method: 'post',
        data: parameter,
        timeout: 60000
    })
}

export function wxPay (parameter) {
    return request({
        url: userApi.wxPay,
        method: 'post',
        data: parameter,
        timeout: 60000
    })
}
