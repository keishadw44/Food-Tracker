
require('dotenv').config()
module.exports = {
  "development": {
    // bfb750ddb65cc0f0c7651292ef40d55294caa32e
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_password,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "postgres",

}
}



