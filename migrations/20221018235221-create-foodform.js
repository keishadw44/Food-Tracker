'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Foodforms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      day: {
        allowNull: false,
        type: Sequelize.DATE
      },
      mealType: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      foodName: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      beverage: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      userName: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Foodforms');
  }
};