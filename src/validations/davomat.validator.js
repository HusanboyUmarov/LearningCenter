
const Joi = require('joi')

const davValidator = (day, student_id, isApsent) =>{
    const {error} = Joi.object({
        day : Joi.string().required(), 
        student_id : Joi.string().required(), 
        isApsent : Joi.boolean().required()


    }).validate({day, student_id, isApsent})

    if(error)
    return error
    else
    return false
}

module.exports = davValidator;