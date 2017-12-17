module.exports = app => {
  const mongoose = app.mongoose
  const UserSchema = new mongoose.Schema({
    userId: String,
    avatar: String,
    userName: String,
    nickName: String,
    password: String,
    email: String,
    mobile: String,
    wechat: String,
    github: String,
    role: [String],
    isDeleted: { type: Boolean, default: false }
  })

  return mongoose.model('User', UserSchema)
}
