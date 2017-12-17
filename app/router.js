'use strict'

module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  router.get('/news', controller.news.list)

  // 用户管理
  router.resources('users', '/api/users', controller.users)
  // 注册
  router.post('/auth/register', controller.users.create)
  // 登录
  router.post('/auth/login', controller.auth.login)
  // 登出
  // router.post('/auth/logout', controller.auth.logout)
  // 重置密码
  // router.post('/auth/resetpwd', controller.auth.resetpwd)
}
