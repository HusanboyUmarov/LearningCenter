const {Schema, model} = require('mongoose')

const schem = new Schema({
    weekly_days: 
    {
        type:String,
        required:true
    },
    on_time:{
        type:String,
        required:true
    },
    teacher_id:{
        type:Schema.Types.ObjectId,
        ref:'teacher'
    },
    subject_id:{
        type:Schema.Types.ObjectId,
        ref:'subject'
    }
    
})

module.exports = model('group', schem)