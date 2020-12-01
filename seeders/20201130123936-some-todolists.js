"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("toDoLists", [
      {
        userId: 1,
        name: "Tati's List",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        name: "Lucy's List",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        name: "Max's List",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("toDoLists", null, {});
  },
};
