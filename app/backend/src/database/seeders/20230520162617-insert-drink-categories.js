'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('drinkCategories', [{
      idCategory: 1,
      strCategory: 'Ordinary Drink',
    },
    {
      idCategory: 2,
      strCategory: 'Cocktail',
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('drinkCategories', null, {});
  }
};
