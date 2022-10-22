const express = require("express");
const db = require("../models");
const router = express.Router();

// const User = require('./helpers/dbConnection')

router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now(), "food");
  next();
});

function requireAuth(req, res, next) {
  if (req.session.user) next();
  else if (!req.session.user) {
    req.session.destroy();
    console.log("You are NOT logged in");
    return req.redirect("/login");
  } else {
    req.session.destroy();
    console.log("You are NOT logged in");
    return res.redirect("./register");
  }
}

router.get("*", (req, res) => {
  req.session.destroy();
  if (!req.session) console.log("Session Destroyed");
  return res.redirect(`home`);
});

router.get("/food", requireAuth, async (req, res) => {
  const records = await User.findAll();
  let users = [];
  records.map((record) => {
    users.push(record.dataValues);
  });

  const formData = {
    //attributes
    username: "nameqb",
    date: new Date(),
    mealCategory: "lunch",
    foodName: "apple",
    beverage: "water",
  };

  console.log(formData.mealCategory);

  return res.render(`food`, {
    userData: users,
    formData: formData,
    title: "Food Daily",
  });
});

router.get('/foodform', requireAuth, function (req, res) {
   return res.render(`foodform`, {
       title: "Food Form"
   })
});

router.post("/foodform", requireAuth, async (req, res) => {

  // try {`
    const { day, foodName, beverage, mealType } = req.body;

    if (day && foodName && beverage && mealType) {
         console.log(day, foodName, beverage, mealType);
         try {
           await db.Comment.create({
            day: day,
            foodName: foodName,
            beverag: beverage,
            mealType: mealType
           })
           const records = await db.Comment.findAll()
           res.send(records)
          
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
