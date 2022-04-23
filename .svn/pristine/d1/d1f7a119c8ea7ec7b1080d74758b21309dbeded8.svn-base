import request from '@/utils/request'

const userApi = {
  getSchoolForPage: '/school/getSchoolForPage', // 查询学校（分页）
  getSchool: '/school/getSchool', // 查询学校
  delSchool: '/school/delSchool', // 删除学校
  saveSchool: '/school/saveSchool', // 新增学校
  updateSchool: '/school/updateSchool', // 更新学校
  getSchoolClazzRelation: '/school/getSchoolClazzRelation'// 学校班级关联关系
}

export function getSchoolForPage (parameter) {
  return request({
    url: userApi.getSchoolForPage,
    method: 'post',
    data: parameter
  })
}
export function getSchool (parameter) {
  return request({
    url: userApi.getSchool,
    method: 'post',
    data: parameter
  })
}

export function delSchool (parameter) {
  return request({
    url: userApi.delSchool,
    method: 'post',
    data: parameter
  })
}

export function saveSchool (parameter) {
  return request({
    url: userApi.saveSchool,
    method: 'post',
    data: parameter
  })
}
export function updateSchool (parameter) {
  return request({
    url: userApi.updateSchool,
    method: 'post',
    data: parameter
  })
}

export function getSchoolClazzRelation (parameter) {
  return request({
    url: userApi.getSchoolClazzRelation,
    method: 'post',
    data: parameter
  })
}
