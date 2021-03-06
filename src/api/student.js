import request from '@/utils/request'

const userApi = {
  getStudentForPage: '/student/getStudentForPage', // 查询学校（分页）
  getStudent: '/student/getStudent', // 查询学校
  delStudent: '/student/delStudent', // 删除学校
  saveStudent: '/student/saveStudent', // 新增学校
  updateStudent: '/student/updateStudent', // 更新学校
  getStudentById: '/student/getStudentById',
  importStudentInfo: '/import/importStudentInfo',
  importStudentCourseInfo: '/import/importStudentCourseInfo'// 教材导入

}

export function getStudentForPage (parameter) {
  return request({
    url: userApi.getStudentForPage,
    method: 'post',
    data: parameter
  })
}
export function getStudent (parameter) {
  return request({
    url: userApi.getStudent,
    method: 'post',
    data: parameter
  })
}

export function delStudent (parameter) {
  return request({
    url: userApi.delStudent,
    method: 'post',
    data: parameter
  })
}

export function saveStudent (parameter) {
  return request({
    url: userApi.saveStudent,
    method: 'post',
    data: parameter
  })
}
export function updateStudent (parameter) {
  return request({
    url: userApi.updateStudent,
    method: 'post',
    data: parameter
  })
}

export function getStudentById (parameter) {
  return request({
    url: userApi.getStudentById,
    method: 'post',
    data: parameter
  })
}

export function importStudentInfo (parameter) {
  return request({
    url: userApi.importStudentInfo,
    method: 'post',
    timeout: 5 * 6000 * 10, // 五分钟
    data: parameter
  })
}

export function importStudentCourseInfo (parameter) {
  return request({
    url: userApi.importStudentCourseInfo,
    method: 'post',
    timeout: 5 * 6000 * 10, // 五分钟
    data: parameter
  })
}
