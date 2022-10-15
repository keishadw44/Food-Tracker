const express = require("express");
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));

app.use(express.json());
app.use(express.static('./public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(require('./routes/authentication'));
app.use(require('./routes/review'));
app.use(require('./routes/food'))
// app.use(require('./public/css'));


app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});