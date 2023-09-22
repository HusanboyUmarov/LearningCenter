const { isValidObjectId } = require('mongoose')
const dbTeacher = require('../models/teacher.model')
const CustomError = require('../utils/costum-error')
const teacherValidator = require('../validations/teacher.valitator')
//.............................................................................................
const get = async(req, res, next)=>{
   try {
    const data = await dbTeacher.find()
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
    const data = await dbTeacher.findById(id)
    res.send({message:'success', data})
        
    } catch (error) {
        next(error)
        
    }
}
//.............................................................................................


const add = async(req, res, next)=>{
    try {
    const {first_name, last_name, phone, qualifiction } = req.body
    const error = teacherValidator(first_name, last_name, phone, qualifiction)
    if(error) throw new CustomError(401, error)
    const img_name = req.fileName
    const data = await dbTeacher.create(({first_name, last_name, phone, qualifiction, img_name}))
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
    const {first_name, last_name, phone, qualifiction } = req.body
    await dbTeacher.findByIdAndUpdate(id, {first_name, last_name, phone, qualifiction})
    const data =await dbTeacher.findById(id)
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
    await dbTeacher.findByIdAndDelete(id)
    const data = await dbTeacher.findById(id)
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