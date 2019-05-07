/**
 * Controller User
 */

//Model
const UserModel = require('../models/user')

module.exports = {
    async create(req, res){
        try {
            let user = new UserModel(req.body)
            await user.save()
            return res.status(200).json({
                info: 'success',
                message: 'Usuario creado'
            })
        } catch (error) {
            console.log(error)
            return res.status(404).json({
                info: 'fail',
                message: 'Usuario no creado, error interno'
            })
        }
    },

    async findUser(req, res){
        try {
            let user = await UserModel.find({username: req.params.username})
            if(user.length > 0){
                return res.status(200).json({
                    info: 'success',
                    message: 'Usuario encontrado',
                    user: {
                        name: user[0].name,
                        email: user[0].email,
                        summary: user[0].summary
                    }
                })
            }else{
                return res.status(200).json({
                    info: 'warning',
                    message: 'Usuario no encontrado',
                    user: []
                })
            }
            
        } catch (error) {
            console.log(error)
            return res.status(404).json({
                info: 'fail',
                message: 'Usuario no encontrado, error interno',
                user: null
            })
        }
    },

    async login(req, res){
        try {
            let userData = req.body
            let user = await UserModel.find({username: userData.username})
            if(user.length > 0){
                if(user[0].password == userData.password){
                    return res.status(200).json({
                        info: 'success',
                        message: 'Usuario encontrado y verificado',
                        response: true
                    })
                }else{
                    return res.status(200).json({
                        info: 'warning',
                        message: 'Usuario encontrado pero no coincide la contraseña',
                        response: false
                    })
                }
            }else{
                return res.status(200).json({
                    info: 'warning',
                    message: 'Usuario no encontrado',
                    response: false
                })
            }
        } catch (error) {
            console.log(error)
            return res.status(404).json({
                info: 'fail',
                message: 'Usuario no encontrado, error interno',
                response: false
            })
        }
    }
}