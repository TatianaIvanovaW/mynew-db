"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("toDoItems", [
      {
        task: "tomatoes",
        deadline: "12.12.2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "do dishes",
        deadline: "01.12.2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
