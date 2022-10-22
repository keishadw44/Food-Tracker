const express = require("express");
const router = express.Router();

const brcypt = require('bcrypt');

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


router.get('/register', (req, res) => {
    return res.render(`register`, {
        title: "Register Page"
    })
  

});

router.get('/login', (req, res) => {
    return res.render(`login`, {
    title: "Login"
    })
});

router.get('/foodform', (req, res) => {
    return res.render(`foodform`, {
        title: "Food Form"
    })
});


router.post('/foodform', (req, res) => {
    
    const {foodName,  foodName2, foodName3, drink, mealType} = req.body

    return res.render(`foodform`, {
        title: "Food Form"
    })
});


router.get('/register', (req, res) => {
    const {firstName, lastName, email, username, } = req.body
    return res.render(`register`)
});

router.get('/login', (req, res) => {
    return res.send(`login`)
});

router.post('/login', (req, res) => {
    
    const {name, password} = req.body;

    return res.send(`Login Page`)
    });
    

router.get('/logout', (req, res) => {
    req.session.destroy();
    if(!req.session)console.log('User Session Over');
    return res.redirect(`login`)
    
});

module.exports = router
