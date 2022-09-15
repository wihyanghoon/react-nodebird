const passport = require('passport')
const { Strategy = LocalStrategy } = require('passport-local')
const bcrypt = require('bcrypt')
const { User } = require('../models')

module.exports = () => {
    try {
        passport.use(new LocalStrategy({
            usernameField: 'email',
            passwrodField: 'password',
        }, async (email, password, done) => {
            const user = await User.findOne({
                where: { email }
            })
            if (!user) {
                done(null, false, { reason: '존재하지 않는 이메일 입니다!' })
            }
            const result = await bcrypt.compare(password, user.password)
            if (result) {
                return done(null, user)
            }
            return done(null, false, { reson: '비밀번호가 틀렸습니다.' })
        }))
    } catch(error) {
        console.error(error)
        return done(error)
    }

}