'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('mealIngredients', [{
      idIngredient: 1,
      strIngredient: 'Tequila',
    },
    {
      idIngredient: 2,
      strIngredient: 'Lime juice',
    },
    {
      idIngredient: 3,
      strIngredient: 'Cointreau',
    },
    {
      idIngredient: 4,
      strIngredient: 'Salt',
    },
    {
      idIngredient: 5,
      strIngredient: 'Mint',
    },
    {
      idIngredient: 6,
      strIngredient: 'Sugar',
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('mealIngredients', null, {});
  }
};
