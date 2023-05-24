'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('areas', [{
      idArea: 1,
      strArea: 'American',
    },
    {
      idArea: 2,
      strArea: 'British',
    },
    {
      idArea: 3,
      strArea: 'Canadian',
    },
    {
      idArea: 4,
      strArea: 'Chinese',
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('areas', null, {});
  }
};
