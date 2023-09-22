const config = require('../../config')
const {connect} = require('mongoose')
const bootstrap = async(app)=>{

    app.listen(config.port, ()=>{
        connect(config.db)
        console.log(`server is listening on ${config.port}`)
    })

}

module.exports = bootstrap;