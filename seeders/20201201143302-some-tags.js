"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("tags", [
      {
        title: "shopping",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "sport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "cat",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "home",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "relax",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tags", null, {});
  },
};
