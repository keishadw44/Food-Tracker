'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Foodform extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Foodform.belongsTo(models.User, {
        foreignKey: 'userName',
        onDelete: 'CASCADE'
      });
    }
  };
  
  Foodform.init({
    day: DataTypes.DATE,
    mealType: DataTypes.STRING,
    foodName: DataTypes.STRING,
    beverage: DataTypes.STRING,
    userName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Foodform',
  });
  return Foodform;
};