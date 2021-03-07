const {User} = require('../models')
//const {Login} = require('../models')
const config = require ('../config/config')
const jwt = require('jsonwebtoken')

function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user,config.authentication.jwtSecret,{
        expiresIn: ONE_WEEK
    })
}
module.exports = {
  async register (req,res) {
    try {
        const user = await User.create(req.body)
        res.send(user.toJSON())
    }catch (err) {
            res.status(400).send({
                error:'This User has already been Created'
            })
        }   
    },

    async login (req,res) {
        try {
            const {username,password} = req.body
            console.log(User + " m e")
            const login = await User.findOne({
                where:{
                    username: username
                }
            })
            if (!login){
                res.status(403).send({
                    error:'The Login Failed1'
                })
            }

            const isPasswordValid = password === login.password
            console.log(password,login.password)
            if(!isPasswordValid) {
                res.status(500).send({
                    error:'The Login Failed2'
                })
            }

            const loginJson = login.toJSON()
            res.send({
                user: loginJson,
                token: jwtSignUser(loginJson)
            })
        }catch (err){
            res.status(400).send({
                error:'Login Failed'
            })
        }
    }

}