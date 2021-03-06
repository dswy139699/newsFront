import { toPayAsPC, getStudent, wxPay } from '@/api/pay'

export const services = {
    toPayAsPC (data) { // 查询分页
        return new Promise((resolve, reject) => {
            toPayAsPC(data).then(response => {
                resolve(response || {})
            }).catch(error => {
                reject(error)
            })
        })
    },
    wxPay (data) { // 查询分页
        return new Promise((resolve, reject) => {
            wxPay(data).then(response => {
                resolve(response || {})
            }).catch(error => {
                reject(error)
            })
        })
    },
    getStudent (data) { // 查询分页
        return new Promise((resolve, reject) => {
            getStudent(data).then(response => {
                resolve(response || {})
            }).catch(error => {
                reject(error)
            })
        })
    }
}
