"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("toDoLists", [
      {
        name: "Shoping",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cleaning",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
