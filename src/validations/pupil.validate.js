const Joi = require('joi')
const pupilValid =(first_name, last_name, phone, parents_phone, parents_name, group_id)=>{
    const {error} = Joi.object({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        phone: Joi.string().required(),
        parents_name: Joi.string().required(),
        parents_phone: Joi.string().required(),
        group_id: Joi.string().required(),
    }).validate({first_name, last_name, phone, parents_phone, parents_name, group_id })
    if(error)
    return error
    else
    return false
}


module.exports = pupilValid;