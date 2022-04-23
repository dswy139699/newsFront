// eslint-disable-next-line
import { UserLayout, BasicLayout,StudentLayout,BasicStudent,ViewLayout } from '@/layouts'

// 学校
export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '主页' },
    redirect: '/news',
    children: [
      {
        path: '/news',
        name: 'newsManage',
        component: { render: h => h('router-view') },
        meta: { title: '新闻管理', icon: 'form', keepAlive: true }, // 没有permission默认没有加权限，全部可以访问，type为了menu点击时，相同的type默认选中menu的样式
        redirect: '/item/manage',
        children: [
          {
            path: '/item/manage',
            name: 'itemManage',
            component: () => import('@/views/items'),
            meta: { title: '栏目管理', keepAlive: true }
          },
          {
            path: '/news/manage',
            name: 'newsListManage',
            component: () => import('@/views/news'),
            meta: { title: '新闻管理', keepAlive: true }
          },
          {
            path: '/news/manage/increase',
            name: 'newsIncrease',
            hidden: true,
            component: () => import('@/views/increaseNews'),
            meta: { title: '新增新闻', keepAlive: true }
          },
          {
            path: '/comment/manage',
            name: 'commentManage',
            component: () => import('@/views/comment'),
            meta: { title: '评论管理', keepAlive: true }
          },
          {
            path: '/user/manage',
            name: 'userManage',
            component: () => import('@/views/user'),
            meta: { title: '用户管理', keepAlive: true }
          }
        ]
      }
    ] },
  {
    path: '/view',
    name: 'View',
    hidden: true,
    component: ViewLayout,
    redirect: '/view/index',
    meta: { title: '新闻首页' },
    children: [
      // {
      //   path: '/index',
      //   redirect: 'index'// 重定向
      // },
      {
        path: '/view/index',
        name: 'ViewIndex',
        meta: { title: '首页' },
        component: () => import('@/views/viewIndex')
      }
    ]
  },
      // 错误页面

      {
        path: '/exception/403',
        // name: 'Exception403',
        component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
        meta: { title: '403' }
      },
      {
        path: '/exception/404',
        // name: 'Exception404',
        component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
        meta: { title: '404' }
      },
      {
        path: '*', redirect: '/exception/404', hidden: true
      }
    ]

// 学生
export const asyncStudentRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicStudent,
    meta: { title: '主页' },
    redirect: '/book/student/payed',
    children: [
      {
        path: '/book/student/unPayed',
        name: 'studentUnPayed',
        component: () => import('@/views/studentView/unPayed'),
        meta: { title: '未付款', keepAlive: true, icon: 'yuque' }
      },
      {
        path: '/book/student/studentInfo',
        name: 'studentInfo',
        component: () => import('@/views/studentView/studentInfo'),
        meta: { title: '未付款', keepAlive: true, icon: 'yuque' }
      }
      // {
      //   path: '/payGateWay',
      //   name: 'payGateWay',
      //   hidden: false,
      //   component: () => import('@/views/studentView/payGateWay'),
      //   meta: { title: '未付款', keepAlive: true, icon: 'yuque' }
      // }
      // {
      //   path: '/book/student/payed',
      //   name: 'studentPayed',
      //   component: () => import('@/views/studentView/payed'),
      //   meta: { title: '已付款', keepAlive: true, icon: 'check-square' }
      // }
      // {
      //   path: '/book/student/unPayed',
      //   name: 'unPayed',
      //   component: () => import('@/views/studentView/unPayed'),
      //   meta: { title: '未付款', keepAlive: true, icon: 'yuque' }
      // }
    ]
  },
  // 错误页面

  {
    path: '/exception/403',
    // name: 'Exception403',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
    meta: { title: '403' }
  },
  {
    path: '/exception/404',
    // name: 'Exception404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
    meta: { title: '404' }
  },
  {
    path: '*', redirect: '/exception/404', hidden: true
  }
  ]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      }
      // {
      //   path: 'studentLogin',
      //   name: 'studentLogin',
      //   component: () => import('@/views/user/studentLogin')
      // }
    ]
  },
  {
    path: '/student',
    component: StudentLayout,
    // name: 'studentLogin',
    // component: () => import('@/views/user/studentLogin'),
    // component: { render: h => h('router-view') },
    redirect: '/student/studentLogin',
    hidden: true,
    children: [
      {
        path: 'studentLogin',
        name: 'studentLogin',
        component: () => import('@/views/user/studentLogin')
      }
    ]
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
