const Controller = require('egg').Controller

class AuthController extends Controller {
  async login () {
    const { ctx, service } = this
    const bodyRule = {
      email: { type: 'string' },
      password: { type: 'string' }
    }
    ctx.validate(bodyRule)
  }
}

module.exports = AuthController
