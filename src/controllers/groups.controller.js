const { isValidObjectId } = require('mongoose')
const dbGroup = require('../models/groups.model')
const CustomError = require('../utils/costum-error')
const groupValidator = require('../validations/group.validator')

//.............................................................................................
const get = async(req, res, next)=>{
   try {
    const data = await dbGroup.find()
    res.send({message: 'success', data}).status(200)
    
   } catch (error) {
    next(error)
    
   }
}

//.............................................................................................
const getOne = async(req, res, next)=>{
    try {
        const {id} = req.params
    if(!isValidObjectId(id)) return res.send({message: 'Invalid user Id'})
    const data = await dbGroup.findById(id)
    res.send({message:'success', data})
        
    } catch (error) {
        next(error)
        
    }
}
//.............................................................................................


const add = async(req, res, next)=>{
    try {
    const {weekly_days, on_time, teacher_id, subject_id } = req.body

    const error = groupValidator(weekly_days, on_time, teacher_id, subject_id)

    if(error) throw new CustomError(401, error)

    const data = await dbGroup.create(({weekly_days, on_time, teacher_id, subject_id}))
    res.send({message: 'Success', data})

    } catch (error) {

        next(error) 
    }
}
//.............................................................................................

const reset = async(req, res, next)=>{
 try {
    const {id} = req.params
    if(!isValidObjectId(id)) return res.send({message: 'Invalid user Id'})
    const {weekly_days, on_time, teacher_id, subject_id} = req.body
    await dbGroup.findByIdAndUpdate(id, {weekly_days, on_time, teacher_id, subject_id})
    const data =await dbGroup.findById(id)
    res.send({message:'success', data})
    
 } catch (error) {
    next(error)
 }

}

//.............................................................................................

const remove = async(req, res, next) =>{
    try {
        
        const {id} = req.params
    if(!isValidObjectId(id)) return res.send({message: 'Invalid user Id'})
    await dbGroup.findByIdAndDelete(id)
    const data = await dbGroup.findById(id)
    res.send({message:'success', data})

    } catch (error) {

        next(error)
        
    }

}

//.............................................................................................
module.exports = {
    get,
    add,
    getOne, 
    remove, 
    reset
}