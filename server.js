//require libraries
const express = require("express");
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


app.use(express.static('./public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(require('./routes/authentication'));
app.use(require('./routes/review'));
app.use(require('./routes/food'))
// app.use(require('./public/css'));


// app.use(require('./public/css'));

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});