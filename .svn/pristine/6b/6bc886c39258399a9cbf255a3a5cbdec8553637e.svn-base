const getters = {
  admin: state => true,
  isMobile: state => state.user.isMobile,
  schoolNameList: state => state.user.schoolNameList,
  courseNameList: state => state.user.courseNameList,
  classNameList: state => state.user.classNameList,
  bookNameList: state => state.user.bookNameList,
  nickname: state => state.user.name,
  userInfo: state => state.user.info,
  addRouters: state => state.permission.addRouters,
  initData: state => state.user.initData,
  selectSchoolInfo: state => state.user.selectSchoolInfo.value ? state.user.selectSchoolInfo : (state.user.schoolNameList[0] || {})
}

export default getters
