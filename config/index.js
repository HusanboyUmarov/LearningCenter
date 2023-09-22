require('dotenv/config')
const {env} = process
const config = {
    port : env.PORT,
    db: env.mongoDB,
    jwt_secret: env.JWT_SECRET 
}

module.exports = config;