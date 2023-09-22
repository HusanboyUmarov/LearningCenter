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
    parents_name:{
        type:String,
        required:true,
    },
    parents_phone:{
        type:String,
        required:true,
    },
    img_name:{
        type:String,
        required:true,
    },
    group_id:{
        type:Schema.Types.ObjectId,
        ref:'group'
    }

})
module.exports = model('pupil', schem)