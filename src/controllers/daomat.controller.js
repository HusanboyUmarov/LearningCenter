const { isValidObjectId } = require('mongoose')
const dbdavomat = require('../models/davomat.model')
const CustomError = require('../utils/costum-error')
const davValidator = require('../validations/davomat.validator')


//.............................................................................................
const get = async(req, res, next)=>{
   try {
    const data = await dbdavomat.find()
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
    const data = await dbdavomat.findById(id)
    res.send({message:'success', data})
        
    } catch (error) {
        next(error)
        
    }
}
//.............................................................................................


const add = async(req, res, next)=>{
    try {
    const {day, student_id, isApsent } = req.body

    const error = davValidator(day, student_id, isApsent)

    if(error) throw new CustomError(401, error)

    const data = await dbdavomat.create(({day, student_id, isApsent}))
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
    const {day,isApsent} = req.body

    const da = await dbdavomat.findByIdAndUpdate(id,{day, isApsent})
    
    const data =await dbdavomat.findById(id)
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
    await dbdavomat.findByIdAndDelete(id)
    const data = await dbdavomat.findById(id)
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