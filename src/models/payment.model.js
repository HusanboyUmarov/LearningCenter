const {Schema, model} = require('mongoose')

const schem = new Schema({
    pupil_id:{  
        type:Schema.Types.ObjectId,
        ref:'pupil'
    },
    date:{
        type:String,
    },
    isPayment:{
        type:Boolean,
        default: false
    }


})

module.exports = model('payment', schem)