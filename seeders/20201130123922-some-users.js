"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Tati",
          email: "ivanova.tatiana.w@gmail.com",
          phone: 311234567,
          password: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lucy",
          email: "lucythecatt2019@gmail.com",
          phone: 31245611,
          password: "meowmeow",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Max",
          email: "max@gmail.com",
          phone: 31684630400,
          password: "maxmax",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
