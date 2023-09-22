const fileopload = require('express-fileupload')
const errorHendler = require('../middleware/error-handler')
const router = require('../routers')


const options = (app, express)=>{
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    app.use(fileopload())
    app.use('/api', router)
    app.use(errorHendler)
    
}

module.exports = options;