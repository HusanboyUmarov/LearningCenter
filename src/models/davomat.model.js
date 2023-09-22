const {model, Schema} = require('mongoose')

const schem = new Schema({

  day:{
    type:String,
  },
  student_id:{
    type:String
  },
  isApsent:{
    type:Boolean,
    default: false
  }
})

module.exports = model('davomat', schem)