const Joi = require('joi')
const subjectValid =(subject_name, cost)=>{
    const {error} = Joi.object({
        subject_name: Joi.string().required(),
        cost: Joi.number().required().min(0),
    }).validate({subject_name, cost})
    if(error)
    return error
    else
    return false
}

module.exports = subjectValid;
