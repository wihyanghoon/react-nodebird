const passport = require('passport')
const local = require('./local')
const { User } = require('../models')

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser(async (id, done) => {
        try{
            console.log("디시리얼라이즈")
            const user = await User.findOne({ where: { id } })
            done(null, user)
        }catch(error){
            console.error(error)
            done(error)
        }
        
    })

    local();
}