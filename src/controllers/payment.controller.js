const { isValidObjectId } = require('mongoose')
const dbPayment = require('../models/payment.model')
const CustomError = require('../utils/costum-error')
const paymentValid = require('../validations/payment.validator')

//.............................................................................................
const get = async(req, res, next)=>{
   try {
    const data = await dbPayment.find()
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
    const data = await dbPayment.findById(id)
    res.send({message:'success', data})
        
    } catch (error) {
        next(error)
        
    }
}
//.............................................................................................


const add = async(req, res, next)=>{
    try {
    const { pupil_id , date, isPayment} = req.body

    const error = paymentValid(pupil_id , date, isPayment)

    if(error) throw new CustomError(401, error)

    const data = await dbPayment.create(({pupil_id , date, isPayment}))
    res.send({message: 'Success', data})

    } catch (error) {

        next(error) 
    }
}

//.............................................................................................
module.exports = {
    get,
    add,
    getOne
}