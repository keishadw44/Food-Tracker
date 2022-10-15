const express = require("express");
const router = express.Router();

router.use(function timeLog (req, res, next){
    console.log('Time: ', Date.now(), 'review.js');
    next();
});



router.get('/review', (req, res) => {
   return res.render(`Review Page`)
});

router.post('/review', (req, res) => {

    const {name, review} = req.body;
    console.log(name, review);


   return res.send(`thanks for the review`)

});




module.exports = router
