"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class toDoItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      toDoItem.belongsTo(models.toDoList);

      toDoItem.belongsToMany(models.tag, {
        through: "itemTags",
        foreignKey: "todoItemId",
      });
    }
  }
  toDoItem.init(
    {
      task: DataTypes.STRING,
      deadline: DataTypes.STRING,
      important: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "toDoItem",
    }
  );
  return toDoItem;
};
