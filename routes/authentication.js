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
        title: "Register",
        pageID: "Register Page"
    });
  

});

router.post('/register', async (req,res) =>{
   try {
    const { firstName, lastName, email, username, password} = req.body
   
   const records = await Users.findAll ({where: (email: email)});
   
if(records.length === 0) {
    user.create({
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
}}
})

 catch (error) {

}

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


router.post('/register', (req, res) => {
    const {firstName, lastName, email, username, password} = req.body
    return res.render(`register`)
});

const { firstName, lastName, email, username, password } = req.body;
    console.log("db"[0].dataValues.foodName);
    if (records != null) {
     if (foodName === records[0].dataValues.foodName) {
       res.render("/foodform");
        return res.redirect("/foodform");
       } else {
        return res.redirect("food");
       }
     } catch (error) {
    console.log("catch error");
    res.render("/foodform");
  }



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
