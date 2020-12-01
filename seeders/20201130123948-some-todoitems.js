"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("toDoItems", [
      {
        toDoListId: 1,
        task: "buy tomatoes",
        deadline: "12.12.2020",
        important: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        important: false,
        toDoListId: 3,
        task: "do dishes",
        deadline: "01.12.2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        important: true,
        toDoListId: 1,
        task: "go to the gym",
        deadline: "01.12.2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        important: true,
        toDoListId: 2,
        task: "lay on the sofa",
        deadline: "01.12.2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        important: true,
        toDoListId: 1,
        task: "cook the dinner",
        deadline: "01.12.2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        important: true,
        toDoListId: 2,
        task: "observe",
        deadline: "01.12.2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("toDoItems", null, {});
  },
};
