const formData = [{  
    username: "nameqb", 
    date: new Date(), 
    mealCategory: "lunch", 
    foodName: "orange", 
    beverage: "soda"   
 },
 {  
    username: "nameqb", 
    date: new Date(), 
    mealCategory: "lunch", 
    foodName: "apple", 
    beverage: "juice"   
 },
 {
    username: "nameqb", 
    date: new Date(), 
    mealCategory: "lunch", 
    foodName: "banana", 
    beverage: "water"   
 }];

 <h1>Hey <%= foodObject[0].username %> </h1>
 </br> 
<% foodHTML = foodObject.map(function(food) {
if (food.mealCategory === breakfast) {
 return `<div>
 <p>${food.mealCategory}</p>
 <p>${food.foodName}</p>
 
 </div>` 
}) -%>
<p><%- foodHTML.join(" ") %></p>
// } else if( food.mealCategory === ``) {
//  return `<div>
//  <p>${food.mealCategory}</p>
//  <p>${food.foodName}</p>
 
//  </div>` //build div here how i want the html and actual object to be
// }) -%>
// <p><%- foodHTML.join(" ") %></p>
// }


{/* <h1>Hey <%= foodObject[0].username %> </h1>
</br> 
<% foodHTML = foodObject.map(function(food) { %>

<% if(food.mealCategory === 'dinner'){ %>
    return `<div>
        <p>${food.foodName}</p>
        
        </div>`
  <% } else if (food.mealCategory === `lunch`){ %>  
    return `<div>
        <p>${food.foodName}</p>
        
        </div>`
 <% } else (food.mealCategory === `breakfast`){ %>  
    return `<div>
        <p>${food.foodName}</p>
        
        </div>`
 <% } %>
<p><%- foodHTML.join(" ") %></p>
<% }) -%>     */}





<h1>Hey <%= foodObject[0].username %> </h1>
</br> 
<% foodHTML = foodObject.map(function(food) {
   // if (food.mealCategory === "breakfast") {
       return `<div>
           <p>${food.mealCategory}</p>
           <p>${food.foodName}</p>
           </div>` 
       }) -%>
   <p><%- foodHTML.join(" ") %></p>
   




<% foodHTML = foodObject.map(function(food) {
       return '<p> ${food.mealCategory} </p>'
       }) -%>
   <p><%- foodHTML.join(" | ") %></p>

{/* <div>
    <h1>Hey <%= foodObject[0].username %> </h1>
 </br> 
 <% foodHTML = foodObject.map(function(food) {
        return `<div>
            <p>${food.mealCategory}</p>
            <p>${food.foodName}</p>
            </div>` 
        }) -%>
    <p><%- foodHTML.join(" ") %></p>

   
</div> */}


<% foodObject.forEach(food => { %>
    <% if (food.mealCategory === "lunch") { %>
        return `<div>
            <p>${food.mealCategory}</p>
            <p>${food.foodName}</p>
            </div>` 
    <% }) %>
<% else if ({:food.mealCategory === "breakfast"}) { %>
    return `<div>
        <p>${food.mealCategory}</p>
        <p>${food.foodName}</p>
        </div>` 
<% } %>
<% else ({:food.mealCategory === "dinner"}) { %>
return `<div>
    <p>${food.mealCategory}</p>
    <p>${food.foodName}</p>
    </div>` 
<% }) %>