"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class toDoList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      toDoList.belongsTo(models.user);
      toDoList.hasMany(models.toDoItem);
    }
  }
  toDoList.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "toDoList",
    }
  );
  return toDoList;
};
