const express = require("express");
const router = express.Router();

router.use(function timeLog (req, res, next){
    console.log('Time: ', Date.now(), 'authentication.js');
    next();
});



router.get('/register', (req, res) => {
    return res.send(`Registration Page`)
});

router.post('/register', (req, res) => {
    
const {firstName, lastName, email} = req.body
return res.send(`Registration Page`)
});

router.get('/login', (req, res) => {
    return res.send(`Login Page`)
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
