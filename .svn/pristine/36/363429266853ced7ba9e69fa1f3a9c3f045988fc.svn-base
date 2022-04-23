import { login } from '@/api/login.js'

export const service = {
  loginService (data) {
    return new Promise((resolve, reject) => {
    login(data).then((response) => {
        // console.log(response)
      resolve(response)
    }).catch((err) => {
      reject(err)
    })
  }
  }
}
