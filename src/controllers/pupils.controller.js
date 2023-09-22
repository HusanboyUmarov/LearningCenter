
const CustomError = require("../utils/costum-error")
const pupilValid = require("../validations/pupil.validate")
const { isValidObjectId } = require('mongoose')
const dbStudent = require('../models/pupils.model')

//.............................................................................................

const get = async(req, res, next)=>{
    try {
     const data = await dbStudent.find()
     res.send({message: 'success', data}).status(200)
     
    } catch (error) {
     next(error)
     
    }
 }
 
 //.............................................................................................
 const getOne = async(req, res, next)=>{
     const {id} = req.params
     if(!isValidObjectId(id)) return res.send({message: 'Invalid user Id'})
     const data = await dbStudent.findById(id)
     res.send({message:'success', data})
 }
 //.............................................................................................
 
 const add =async(req, res, next)=>{
    try {
        const {first_name, last_name, phone, parents_phone, parents_name, group_id} = req.body
        
        const error = pupilValid(first_name, last_name, phone, parents_phone, parents_name, group_id)
        if(error) throw new CustomError(403, error)
        const img_name = req.fileName

        const data = await dbStudent.create({group_id ,first_name, last_name, phone, parents_phone, parents_name,img_name})

        res.send({message: 'Success', data}).status(201)
    } catch (error) {
       next(error)
    }

}

 //.............................................................................................
 
 const reset = async(req, res, next)=>{
  try {
     const {id} = req.params
     if(!isValidObjectId(id)) return res.send({message: 'Invalid user Id'})
     const {first_name, last_name, phone, parents_phone, parents_name, group_id} = req.body
     await dbStudent.findByIdAndUpdate(id, {first_name, last_name, phone, parents_phone, parents_name,group_id})
     const data =await dbStudent.findById(id)
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
        await dbStudent.findByIdAndDelete(id)
        const data = await dbStudent.findById(id)
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
