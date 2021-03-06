// import storage from 'store'
import { login } from '@/api/login'
import { getSchool, getSchoolClazzRelation } from '@/api/school'
import { getCourse } from '@/api/course'
import { getTeachingMaterial } from '@/api/book'
// import { getClazz } from '@/api/class'
// import { permission } from './permission'
import { LStorage } from '@/store/session.js'
// import lodash from 'lodash'

const user = {
  state: {
    schoolNameList: [], // 学校数据
    courseNameList: [], // 课程数据
    classNameList: [], // 班级数据
    bookNameList: [], // 教材
    isMobile: true,
    name: '',
    selectSchoolInfo: {}, // 所选学校的具体信息
    info: { } // 当前用户信息
  },

  mutations: {
    SET_MOBILE: (state, isMobile) => {
      state.isMobile = isMobile
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_INFO: (state, info) => {
      state.info = info
    },
    SET_SCHOOL: (state, info) => {
      state.schoolNameList = info
    },
    SET_COURSE: (state, info) => {
      state.courseNameList = info
    },
    SET_CLASS: (state, info) => {
      state.classNameList = info
    },
    SET_BOOK: (state, info) => {
      state.bookNameList = info
    },
    SET_SELECTSCHOOLINFO: (state, info) => {
      state.selectSchoolInfo = info
    }
  },

  actions: {
    SetMobile ({ commit }, data) {
      console.log('是否移动端', data)
      commit('SET_MOBILE', data)
    },
    // 登录
    Login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        // const result = {
        //   name: '张三',
        //   id: 2
        // }
        // LStorage.setItem('token', 'token')
        // commit('SET_NAME', result.name)
        // commit('SET_INFO', result || {})// 暂时将单位
        // userInfo.type = 'school'
        login(userInfo).then(response => {
          const result = response || {}
          LStorage.setItem('token', result.token)
          commit('SET_NAME', result.user ? result.user.name : '')
          commit('SET_INFO', result.user || {})// 暂时将单位写死
          resolve(result)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        const result = {
          name: '张三',
          id: 2
        }
        LStorage.setItem('token', 'token')
        commit('SET_NAME', result.name)
        commit('SET_INFO', result || {})// 暂
        // getInfo().then(response => {
        //   const result = response || {}
        //   // LStorage.setItem('token', result.token)
        //   commit('SET_NAME', result.user ? result.user.name : '')
        //   commit('SET_INFO', result.user || {})// 暂时将单位写死
        //   // storage.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000)
          resolve(result)
        // }).catch(error => {
        //   reject(error)
        // })
      })
    },

    // 登出
    Logout ({ commit, state }) {
      return new Promise((resolve, reject) => {
        // logout().then(() => {
        //   resolve()
        // }).catch((err) => {
        //   reject(err)
        // }).finally(() => {
          commit('SET_NAME', '')
          commit('SET_INFO', { })
          // commit('SET_SELECTSCHOOLINFO', {})
          // commit(permission.mutations.SET_ROUTERS, [])
          // permission.mutations.SET_ROUTERS()
          LStorage.removeItem('token')
        resolve()
        // })
      })
    },

    // 学校
    GetSchool ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getSchool({ id: state.info.id, type: state.info.type }).then((response) => {
          response = response || []
          const schoolNameList = response.map(item => {
           return {
                      ...item,
                      label: item.name,
                      value: item.id
                    }
              })
          commit('SET_SCHOOL', schoolNameList)
          resolve(response)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    // 课程
    GetCourse ({ commit, state }, data = {}) {
      return new Promise((resolve, reject) => {
        getCourse(data).then((response) => {
          response = response || []
          // const schoolNameList = response.map(item => {
          //   return {
          //     label: item.name,
          //     value: item.id
          //   }
          // })
          commit('SET_COURSE', response)
          resolve(response)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    // 班级
    GetClass ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getSchoolClazzRelation({}).then((response) => {
          response = response || []
          commit('SET_CLASS', response)
          resolve(response)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    OnClear ({ commit, state }) {
      return new Promise((resolve, reject) => {
        // logout().then(() => {
        //   resolve()
        // }).catch((err) => {
        //   reject(err)
        // }).finally(() => {
          commit('SET_NAME', '')
          commit('SET_INFO', { })
        commit('SET_SELECTSCHOOLINFO', {})
          // commit(permission.mutations.SET_ROUTERS, [])
          // permission.mutations.SET_ROUTERS()
          LStorage.removeItem('token')
          resolve()
        // })
      })
    },
    GetTeachingMaterial ({ commit, state }, data = {}) {
      return new Promise((resolve, reject) => {
        getTeachingMaterial(data).then((response) => {
          response = response || []
          commit('SET_BOOK', response)
          resolve(response)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    SetSelectSchool ({ commit, state }, data = {}) {
        commit('SET_SELECTSCHOOLINFO', data)
    }
  }
}

export default user
