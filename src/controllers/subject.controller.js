const { isValidObjectId } = require('mongoose')
const dbSubject = require('../models/subjects.mdele')
const CustomError = require('../utils/costum-error')
const subjectValid = require('../validations/subject.validator')

//.............................................................................................
const get = async(req, res, next)=>{
    try {
     const data = await dbSubject.find()
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
    const data = await dbSubject.findById(id)
    res.send({message:'success', data})
    
   } catch (error) {
    next(error)
    
   }
 }
 //.............................................................................................
 

 const add = async(req, res, next)=>{
     try {
     const {subject_name, cost} = req.body
     const error = subjectValid(subject_name, cost)
     if(error) throw new CustomError(401, error)

     const data = await dbSubject.create(({subject_name, cost}))
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
     const {subject_name, cost} = req.body
     await dbSubject.findByIdAndUpdate(id, {subject_name, cost})
     const data =await dbSubject.findById(id)
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
     await dbSubject.findByIdAndDelete(id)
     const data = await dbSubject.findById(id)
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