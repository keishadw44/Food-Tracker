// require libraries
const express = require("express");
const router = express.Router();

// encryption
const bcrypt = require(`bcrypt`); // used to encrypt passwords

// import db module
//const User = require(`../helpers/dbConnection`);
// const models = require('../models')
//const Sequelize = require('sequelize');
//const { User } = require('../models');

// middleware that is specific to this router
router.use(function timeLog (req, res, next){
    console.log('Time: ', Date.now(), 'login.js');
    next();
});

router.get('/home', (req, res) => {
    return res.render(`home`, {
        title: "Home Page"
    })
});


router.post('/register', (req, res) => {
    
    return res.render(`register`, {
        title: `Register`,
        pageID: `registerPage`
    });
});

router.get('/foodform', (req, res) => {
    return res.render(`foodform`, {
        title: "Food Form"
    })
});


router.post('/foodform', (req, res) => {
    
    const {foodName,  foodName2, foodName3, drink, mealType} = req.body

    return res.render(`foodform`)
});


router.get('/register', (req, res) => {
    const {firstName, lastName, email, username, } = req.body
    return res.render(`register`)
});

router.get('/login', (req, res) => {
    return res.render(`login`, {
        title: "Login"
    })
});

router.post('/login', async (req, res) => {
    console.log(req.body)
    const {username, password} = req.body;
    console.log(`hey`);
    console.log(username);
    const user = await User.findOne({ where: { username: username } });
    // const user = await User.findOne({ where: { email: 'fbyron710@gmail.com'} });
    // const [user, created] = await User.findOrCreate({
    // where: { username: 'sdepold', firstname: 'test1', lastName: 'test2', password: '1' }});

    console.log("bam");
    console.log(user);
    
    return res.send(`Login Page`)
 });
    

router.get('/logout', (req, res) => {
    console.log('User Session Over');
    return res.redirect(`home`)
    
});

module.exports = router
