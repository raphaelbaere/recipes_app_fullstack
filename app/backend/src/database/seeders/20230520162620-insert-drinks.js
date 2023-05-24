'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('drinks', [{
      idDrink: 1,
      strDrink: 'Margarita',
      category: 1,
      strIngredient1: 1,
      strIngredient2: 2,
      strIngredient3: 3,
      strIngredient4: 4,
      strIngredient5: 5,
      strIngredient6: 6,
    },
    {
      idDrink: 2,
      strDrink: 'Mojito',
      category: 1,
      strIngredient1: 1,
      strIngredient2: 2,
      strIngredient3: 3,
      strIngredient4: 4,
      strIngredient5: 5,
      strIngredient6: 6,
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('drinks', null, {});
  }
};
