'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     
      await queryInterface.bulkInsert('Users', [{
       firstName: 'Cory',
       lastName: 'Chatman',
       email: 'cchat@cor.com',
       username:'cchat44',
       password:'abcd1234',
       createdAt: new Date(),
       updatedAt: new Date()
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Users', null, {});
     
  }
};
