// require libraries
const express = require("express");
const router = express.Router();
const Sequelize = require('sequelize');
const { User } = require('../models');


// const brcypt = require('bcrypt');

const Foodforms = require('../helpers/dbConnection');

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

        title: "Register",
        pageID: "Register Page"
    });
  

});

router.post('/register', async (req,res) => {
   try {
    const { firstName, lastName, email, username, password} = req.body
    console.log(email);
    console.log('HERE!!!')
    console.log(req.body);
   const records = await User.findAll({where: {email: email}});
   
if(records.length === 0) {
    User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: password,
    });
    return res.redirect(`login`);
}
else {
    return res.status(422).send({error: 'Email already exists'})
}
} catch (error) {
    console.log(error);
}
})


router.get('/login', (req, res) => {
    console.log('switching to login')
    return res.render(`login`, {
    title: "Login"
    })
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
    req.session.destroy();
    if(!req.session)console.log('User Session Over');
    return res.redirect(`login`)
    
});

module.exports = router
