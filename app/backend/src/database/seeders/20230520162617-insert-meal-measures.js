'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('mealMeasures', [{
      idMeasure: 1,
      strMeasure: '1/2 oz',
    },
    {
      idMeasure: 2,
      strMeasure: '1 oz',
    },
    {
      idMeasure: 3,
      strMeasure: '1 1/2 oz',
    },
    {
      idMeasure: 4,
      strMeasure: '2 oz',
    },
    {
      idMeasure: 5,
      strMeasure: '3 oz',
    },
    {
      idMeasure: 6,
      strMeasure: '4 oz',
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('mealMeasures', null, {});
  }
};
