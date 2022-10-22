const express = require('express');
const router = express.Router();

router.use(function timeLog (req, res, next){
    console.log('Time: ', Date.now(), 'authentication.js');
    next();
});


router.get('/foodform', (req, res) => {
    return res.send(`Food Form Page`)
});

router.post('/foodform', (req, res) => {
    
const {foodName,  day, foodName3, drink, mealType} = req.body
console.log(breakfastMeal, lunchMeal, dinnerMeal);
return res.send(`Food Form`)
});
