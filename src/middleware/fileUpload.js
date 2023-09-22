const {v4:uuid} = require('uuid')
const path = require('path')

const fileUpload = (req, res, next) =>{
    try {
    const file = req.files?.file
    if(file == undefined)
    return res.send({message : 'file is required'})
    const fileName = uuid()+path.extname(file.name)
    file.mv(process.cwd()+'/uploads/'+ fileName)
    req.fileName = fileName
    next()
    } catch (error) {
        next(error)
        
    }
    
}
module.exports = fileUpload;