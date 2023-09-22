const Joi = require('joi')

const groupValidator = (weekly_days, on_time, teacher_id, subject_id) =>{
    const {error} = Joi.object({
        weekly_days : Joi.string().required(), 
        on_time : Joi.string().required(), 
        teacher_id : Joi.string().required(), 
        subject_id : Joi.string().required()

    }).validate({weekly_days, on_time, teacher_id, subject_id})

    if(error)
    return error
    else
    return false
}

module.exports = groupValidator;