/**
 * Controller Education
 */

//Model
const EducationModel = require('../models/education')

module.exports = {
    async create(req, res){
        try {
            let education = new EducationModel(req.body)
            await education.save()
            return res.status(200).json({
                info: 'success',
                message: 'Educacion creada'
            })
        } catch (error) {
            console.log(error)
            return res.status(404).json({
                info: 'fail',
                message: 'Educacion no creada, error interno'
            })
        }
    },

    async findAllEducation(req, res){
        try {
            let educations = await EducationModel.find({})
            return res.status(200).json({
                info: 'success',
                message: 'Educaciones encontradas',
                educations
            })
        } catch (error) {
            console.log(error)
            return res.status(404).json({
                info: 'fail',
                message: 'No se pudo buscar las educaciones, error interno'
            })
        }
    },

    async findEducation(req, res){
        try {
            let education = await EducationModel.findOne({_id: req.params.id})
            return res.status(200).json({
                info: 'success',
                message: 'Educacion encontrada',
                education
            })
        } catch (error) {
            console.log(error)
            return res.status(404).json({
                info: 'fail',
                message: 'No se pudo buscar la educacion, error interno'
            })
        }
    },

    async editEducation(req, res){
        try {
            await EducationModel.findByIdAndUpdate(req.params.id, req.body)
            return res.status(200).json({
                info: 'success',
                message: 'Educacion modificada'
            })
        } catch (error) {
            console.log(error)
            return res.status(404).json({
                info: 'fail',
                message: 'No se pudo editar la educacion, error interno'
            })
        }
    }


}