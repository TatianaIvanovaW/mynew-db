"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class itemTag extends Model {
    static associate(models) {
      itemTag.belongsTo(models.toDoItem);
      itemTag.belongsTo(models.tag);
    }
  }
  itemTag.init(
    {
      todoItemId: DataTypes.INTEGER,
      tagId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "itemTag",
    }
  );
  return itemTag;
};
