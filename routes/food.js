const express = require("express");
const { User, Foodform } = require('../models')
const router = express.Router();

// const User = require('./helpers/dbConnection')

router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now(), "food");
  next();
});


function requireAuth(req, res, next) {
  if (req.session.user) next(); //remember to remove ! when fixed
//   else if (!req.session.user) {
//     req.session.destroy();
//     console.log("You are NOT logged in");
//     return req.redirect("/login");
//   } else {
//     req.session.destroy();
//     console.log("You are NOT logged in");
//     return res.redirect("./register");
//   }
}

// router.get("*", (req, res) => {
//   req.session.destroy();
//   if (!req.session) console.log("Session Destroyed");
//   return res.redirect(`home`);
// });

router.get("/food",  async (req, res) => {
//   const records = await User.findAll();
//   let users = [];
//   records.map((record) => {
//     users.push(record.dataValues);
//   });

  const records = await Foodform.findAll({
   where: {
     userName: 'Keisha'
   }
 });
  console.log(records);

  

//   const formData = [{
//     //attributes
//     userName: "nameqb",
//     day: new Date(),
//     mealCategory: "lunch",
//     foodName: "apple",
//     beverage: "water",
//   }];

//   console.log(formData.mealCategory);

  return res.render(`food`, {
   //  userData: users,
    foodObject: records,
    title: "Food Daily",
  });
});

router.get('/foodform',  function (req, res) {
   return res.render(`foodform`, {
       title: "Food Form"
   })
});

router.post("/foodform",  async (req, res) => {

  // try {`
    const { day, foodName, beverage, mealType } = req.body;

    console.log(day)
    console.log(new Date(day))
    console.log(foodName)
    console.log(beverage)
    console.log(mealType)

    if (day && foodName && beverage && mealType) {
         console.log(day, foodName, beverage, mealType);
         try {
            console.log("Creating Food!!!")
           await Foodform.create({
            userName: 'Keisha',
            day: new Date(day),
            foodName: foodName,
            beverage: beverage,
            mealType: mealType
           })
           const records = await Foodform.findAll()
         //   res.send(records)
          
         } catch (error) {
          console.log(error);
         }
        } else {
          console.log('missing information');
        }
//       if (foodName === records[0].dataValues.foodName) {
//         res.render("/foodform");

//         return res.redirect("/foodform");
//       } else {
//         return res.redirect("food");
//       }
//     }
//   } catch (error) {
//     console.log("catch error");
//     res.render("/foodform");
//   }
   res.redirect('food')

});

module.exports = router;

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


// router.get('/food', (req, res) => { //re-add requireAuth, async
   
   
   // const records = await User.findAll();
   // let users = [];
   // records.map((record) => {
   //    users.push(record.dataValues)
   // })
   
  //  const foodObject = [{  //attributes
  //     username: "nameqb", 
  //     date: new Date(), 
  //     mealCategory: "breakfast", 
  //     foodName: "apple", 
  //     beverage: "water"   
  //  },
  //  {  
  //     username: "nameqb", 
  //     date: new Date(), 
  //     mealCategory: "lunch", 
  //     foodName: "orange", 
  //     beverage: "juice"   
  //  },
//    {
//       username: "nameqb", 
//       date: new Date(), 
//       mealCategory: "dinner", 
//       foodName: "banana", 
//       beverage: "water"   
//    },
//    {
//       username: "nameqb", 
//       date: new Date(), 
//       mealCategory: "dinner", 
//       foodName: "pomegranate", 
//       beverage: "water"   
//    }]
   

//    console.log(foodObject.mealCategory)
   
   
//    return res.render(`food`,{
//       // userData:users,
//       foodObject: foodObject,
//       title: "Food Daily",
//    })
   
// });


// // router.get('*', (req, res) => {
// //    req.session.destroy();
// //     if(!req.session)console.log('Session Destroyed');
// //     return res.redirect(`home`)
// // })
 
//  module.exports = router
 

