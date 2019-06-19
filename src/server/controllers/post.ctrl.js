/**
 * Controller Post
 */

//Model
const PostModel = require('../models/post')

module.exports = {
    async create(req, res){
        try {
            let post = new PostModel(req.body)
            await post.save()
            return res.status(200).json({
                info: 'success',
                message: 'Publicacion creada'
            })
        } catch (error) {
            console.log(error)
            return res.status(404).json({
                info: 'fail',
                message: 'Publicacion no creada, error interno'
            })
        }
    },

    async findAllPost(req, res){
        try {
            let posts = await PostModel.find({})
            return res.status(200).json({
                info: 'success',
                message: 'Publicaciones encontradas',
                posts
            })
        } catch (error) {
            console.log(error)
            return res.status(404).json({
                info: 'fail',
                message: 'No se pudo buscar las Publicaciones, error interno'
            })
        }
    },

    async findPost(req, res){
        try {
            let post = await PostModel.findOne({_id: req.params.id})
            return res.status(200).json({
                info: 'success',
                message: 'Publicacion encontrada',
                post
            })
        } catch (error) {
            console.log(error)
            return res.status(404).json({
                info: 'fail',
                message: 'No se pudo buscar la publicacion, error interno'
            })
        }
    },

    async editPost(req, res){
        try {
            await PostModel.findByIdAndUpdate(req.params.id, req.body)
            return res.status(200).json({
                info: 'success',
                message: 'Publicacion modificada'
            })
        } catch (error) {
            console.log(error)
            return res.status(404).json({
                info: 'fail',
                message: 'No se pudo editar la publicacion, error interno'
            })
        }
    }


}