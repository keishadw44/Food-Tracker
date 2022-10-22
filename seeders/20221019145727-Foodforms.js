'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Foodforms', [{
      day: '10/30/22',
      mealType: 'Breakfast',
      foodName: 'Apple',
      beverage: 'water',
      userName: 'Bob$456',
      createdAt: new Date(),
      updatedAt: new Date()

      }], {});
   },
    
     

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Foodforms', null, {});
  }
};
