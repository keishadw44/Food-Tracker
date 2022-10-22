const express = require("express");
const router = express.Router();

// const User = require('./helpers/dbConnection')

router.use(function timeLog (req, res, next){
    console.log('Time: ', Date.now(), 'food');
    next();
});

// function requireAuth(req, res, next) {

//    if(req.session.user) next();
//    else if(!req.session.user) {
//       req.session.destroy();
//       console.log("You are NOT logged in");
//       return req.redirect('/login');
//    }
//    else {
//       req.session.destroy();
//       console.log('You are NOT logged in');
//       return res.redirect('./register')
//    }

// }


router.get('/food', (req, res) => { //re-add requireAuth, async
   
   
   // const records = await User.findAll();
   // let users = [];
   // records.map((record) => {
   //    users.push(record.dataValues)
   // })
   
   const foodObject = [{  //attributes
      username: "nameqb", 
      date: new Date(), 
      mealCategory: "breakfast", 
      foodName: "apple", 
      beverage: "water"   
   },
   {  
      username: "nameqb", 
      date: new Date(), 
      mealCategory: "lunch", 
      foodName: "orange", 
      beverage: "juice"   
   },
   {
      username: "nameqb", 
      date: new Date(), 
      mealCategory: "dinner", 
      foodName: "banana", 
      beverage: "water"   
   },
   {
      username: "nameqb", 
      date: new Date(), 
      mealCategory: "dinner", 
      foodName: "pomegranate", 
      beverage: "water"   
   }]
   

   console.log(foodObject.mealCategory)
   
   
   return res.render(`food`,{
      // userData:users,
      foodObject: foodObject,
      title: "Food Daily",
   })
   
});


// router.get('*', (req, res) => {
//    req.session.destroy();
//     if(!req.session)console.log('Session Destroyed');
//     return res.redirect(`home`)
// })
 
 module.exports = router
 