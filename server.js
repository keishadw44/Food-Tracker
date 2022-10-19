
// require libraries
const express = require("express");
const cookieParser = require('cookie-parser');
const session = require("express-session");
const helmet = require('helmet');
const path = require('path');
require('dotenv').config();

//store instance in variable for later
const app = express();
const port = process.env.PORT || 3001;

//body-parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//setup public folder
app.use(express.static('./public'));

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(
    session({
        secret: process.env.SECRET,
        resave:false,
        saveUninitialized: true,
        cookie: {
            secure: false,
            maxAge: 1000 * 60 * 60 * 24,
        }
    })
)

app.use(require('./routes/authentication'));
app.use(require('./routes/review'));
app.use(require('./routes/food'))
// app.use(require('./public/css'));



app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});