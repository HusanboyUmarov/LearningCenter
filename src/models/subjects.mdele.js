const {Schema, model} = require('mongoose')

const schem = new Schema({
     subject_name:{
        type:String, 
        required:true,
    },
     cost:{
        type:Number,
        required:true,
    }
})
module.exports = model('subject', schem)