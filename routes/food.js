const express = require("express");
const router = express.Router();

router.use(function timeLog (req, res, next){
    console.log('Time: ', Date.now(), 'food.js');
    next();
});



router.get('/food', (req, res) => {
    return res.render(`food`,{
      title: "Food Daily"
    })

 });
 
 router.post('/food', (req, res) => {
 
    const { username, date, mealCategory, foodName, beverage } = req.body;
    //update foodTable (adding information based on the username/userid)

   return res.send(`<h1>Hello ${username}! On ${date}, you've eaten ${foodName} for ${mealCategory} and had ${beverage} to drink </h1>`)
 
   //  return res.redirect(`foodform`)
 
 });
 
 

 
 
 module.exports = router
 