const CustomError = require("../utils/costum-error")

const errorHendler =async(err, __, res, next)=>{
    console.log(err)
    if(err instanceof CustomError)
    {
        return res.status(err.status).send({message: err.message});
    }
    res.status(500).send({message: 'Internal server error'})
    
};
module.exports = errorHendler;