const Joi = require('joi')

const teacherValidator = (first_name, last_name, phone, qualifiction)=>{
    const {error} = Joi.object({
        first_name: Joi.string().required(), 
        last_name: Joi.string().required(), 
        phone: Joi.string().regex(/^998(9[012345789]|6[123456789]|7[01234569])[0-9]{7}$/), 
        qualifiction: Joi.string().required()

    }).validate({first_name, last_name, phone, qualifiction})
    if(error)
    return error
    else
    return false
}

module.exports = teacherValidator;