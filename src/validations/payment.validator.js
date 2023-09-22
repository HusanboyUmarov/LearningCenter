const Joi = require('joi')
const paymentValid =(pupil_id , date, isPayment)=>{
    const {error} = Joi.object({
        pupil_id: Joi.string().required(),
        date: Joi.string().required(),
        isPayment: Joi.bool().required(),
        
    }).validate({pupil_id , date, isPayment })
    if(error)
    return error
    else
    return false
}


module.exports = paymentValid;