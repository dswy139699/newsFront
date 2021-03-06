import request from '@/utils/request'

const userApi = {
  getCourseForPage: '/course/getCourseForPage', // 查询学校（分页）
  getCourse: '/course/getCourse', // 查询学校
  delCourse: '/course/delCourse', // 删除学校
  saveCourse: '/course/saveCourse', // 新增学校
  updateCourse: '/course/updateCourse', // 更新学校
  getCourseById: '/course/getCourseById',
  importCourseInfo: '/import/importCourseInfo'//
}

export function getCourseForPage (parameter) {
  return request({
    url: userApi.getCourseForPage,
    method: 'post',
    data: parameter
  })
}
export function getCourse (parameter) {
  return request({
    url: userApi.getCourse,
    method: 'post',
    data: parameter
  })
}

export function delCourse (parameter) {
  return request({
    url: userApi.delCourse,
    method: 'post',
    data: parameter
  })
}

export function saveCourse (parameter) {
  return request({
    url: userApi.saveCourse,
    method: 'post',
    data: parameter
  })
}
export function updateCourse (parameter) {
  return request({
    url: userApi.updateCourse,
    method: 'post',
    data: parameter
  })
}

export function getCourseById (parameter) {
  return request({
    url: userApi.getCourseById,
    method: 'post',
    data: parameter
  })
}

export function importCourseInfo (parameter) {
  return request({
    url: userApi.importCourseInfo,
    method: 'post',
    timeout: 5 * 6000 * 10, // 五分钟
    data: parameter
  })
}
