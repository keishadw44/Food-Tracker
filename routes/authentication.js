const express = require("express");
const router = express.Router();

router.use(function timeLog (req, res, next){
    console.log('Time: ', Date.now(), 'authentication.js');
    next();
});



router.get('/register', (req, res) => {
    return res.render(`register`)
});

router.post('/register', (req, res) => {
    
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
    console.log('User Session Over');
    return res.redirect(`home`)
    
});

module.exports = router
