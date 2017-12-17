const Controller = require('egg').Controller

class AuthController extends Controller {
  async login () {
    const { ctx, service } = this
    const bodyRule = {
      email: { type: 'string' },
      password: { type: 'string' }
    }
    const payload = ctx.request.body
    ctx.validate(bodyRule, service)
    const user = await service.auth.login(payload)
    ctx.apiSuccess(user, 200)
  }
}

module.exports = AuthController
