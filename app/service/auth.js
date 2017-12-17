const Service = require('egg').Service
const bcrypt = require('bcyrpt')

class AuthService extends Service {
  async login (userInfo) {
    const { userName, email, password } = userInfo
    const condition = { isDeleted: false }
    if (userName) condition.userName = userName
    if (email) condition.email = email
    const user = await this.ctx.model.User.findOne(condition)
    const isAuth = await bcrypt.compare(password, user.password)
    if (!isAuth) {
      throw new Error('Invilidate userName or password.')
    } else {
      return user
    }
  }
}

module.exports = AuthService
