const {Schema, model} = require('mongoose')

const schem = new Schema({
    first_name:{
        type:String, 
        required:true,
    },
     last_name:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    qualifiction:{
        type:String,
        required:true,
    },
    img_name:{
        type:String,
        required:true,
    }
})
module.exports = model('teacher', schem)