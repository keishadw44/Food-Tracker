require("dotenv").config();
module.exports = {

  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_password,
    database: "Food-tracker",
    host: process.env.DB_HOST,
    dialect: "postgres",
  },
};

