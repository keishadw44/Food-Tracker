const express = require("express");
const router = express.Router();

router.use(function timeLog (req, res, next){
    console.log('Time: ', Date.now(), 'authentication.js');
    next();
});

router.get('/home', (req, res) => {
    return res.render(`home`, {
        title: "Home Page"
    })

});

router.get('/foodform', (req, res) => {
    return res.render(`foodform`)
});

router.post('/foodform', (req, res) => {
    
const {foodName,  foodName2, foodName3, drink, mealType} = req.body

return res.render(`foodform`)
});


module.exports = router
