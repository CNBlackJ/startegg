const Controller = require('egg').Controller
const bcrypt = require('bcrypt')

const queryRule = {
  limit: { type: 'string', required: false },
  skip: { type: 'string', required: false },
  sort: { type: 'string', required: false }
}

const createRule = {
  email: { type: 'string' },
  nickName: { type: 'string' },
  password: { type: 'string' }
}

const updateRule = {
  email: { type: 'string', required: false },
  nickName: { type: 'string', required: false },
  password: { type: 'string', required: false },
  userId: { type: 'string', required: false },
  userName: { type: 'string', required: false },
  avatar: { type: 'string', required: false },
  mobile: { type: 'string', required: false },
  wechat: { type: 'string', required: false },
  github: { type: 'string', required: false },
  role: { type: 'string', required: false }
}

const paramsRule = {
  id: { type: 'string' }
}

class UsersControler extends Controller {
  async create () {
    const { ctx, service } = this
    const payload = ctx.request.body
    payload.password = await bcrypt.hash(payload.password, 10)
    ctx.validate(createRule, payload)
    const res = await service.users.create(payload)
    ctx.apiSuccess(res, 201)
  }

  async index () {
    const { ctx, service } = this
    const query = ctx.request.query
    ctx.validate(queryRule, query)
    const res = await service.users.list(query)
    ctx.apiSuccess(res, 200)
  }

  async show () {
    const { ctx, service } = this
    const params = ctx.params
    ctx.validate(paramsRule, params)
    const res = await service.users.findById(params.id)
    ctx.apiSuccess(res, 200)
  }

  async update () {
    const { ctx, service } = this
    const params = ctx.params
    const user = ctx.request.body
    ctx.validate(updateRule)
    ctx.validate(paramsRule, params)
    const res = await service.users.update(params.id, user)
    ctx.apiSuccess(res, 200)
  }

  async destroy () {
    const { ctx, service } = this
    const params = ctx.params
    ctx.validate(paramsRule, params)
    const res = await service.users.destroy(params.id)
    ctx.apiSuccess(res, 204)
  }
}

module.exports = UsersControler
