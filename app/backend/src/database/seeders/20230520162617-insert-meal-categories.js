'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('mealCategories', [{
      idCategory: 1,
      strCategory: 'Beef',
    },
    {
      idCategory: 2,
      strCategory: 'Breakfast',
    },
    {
      idCategory: 3,
      strCategory: 'Chicken',
    },
    {
      idCategory: 4,
      strCategory: 'Dessert',
    },
    {
      idCategory: 5,
      strCategory: 'Goat',
    },
    {
      idCategory: 6,
      strCategory: 'Lamb',
    },
    {
      idCategory: 7,
      strCategory: 'Miscellaneous',
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('mealCategories', null, {});
  }
};
