
# npx sequelize-cli init 
# npx sequelixe-cli db:migrate
npx sequelize-cli db:create
# npx sequelize-cli db:drop
# npx sequelize-cli db:generate
# npx sequelize-cli migration:generate





npm i sequelize pg
npm i --save-dev sequelize-cli

npx sequelize-cli init

npx sequelize-cli model:generate --name Foodform --attributes 'day:date,mealType:string,foodName:string,beverage:string,userName:string'