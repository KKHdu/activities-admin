import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {
  getToken
} from '@/utils/auth'
import {
  WHITE_LIST,
  APP_NAME
} from '@/config'
router.beforeEach((to, from, next) => {
  NProgress.start()
  // 未登录 全部重定向至登录界面
  if (!getToken()) {
    // 避免死循环
    if (WHITE_LIST.indexOf(to.path) !== -1 || to.path.indexOf('/inform/detail') !== -1) {
      next()
    } else {
      next('/login')
    }
    // 已登录
  } else {
    if (to.path.match(/^\/login(?:\/(?=$))?$/i)) {
      next('/')
    } else {
      if (!store.getters.user) {
        // 构建可访问的路由表
        store.dispatch('generateRoutes').then(() => {
          router.addRoutes(store.getters.newRoutes) // 动态添加新增路由
          // 获取用户信息
          store.dispatch('getUserInfo').then(() => {
            next({ ...to
            })
          })
        }).catch((err) => {
          console.error(err)
          store.dispatch('logout').then(() => {
            next('/login')
          })
        })
      } else {
        next()
      }
    }
    const title = to.name ? `${to.name} - ` : ''
    document.title = `${title}${APP_NAME}`
  }

  NProgress.done()
})
