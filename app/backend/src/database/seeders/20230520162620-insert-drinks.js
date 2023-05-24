'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('drinks', [{
      idDrink: 1,
      strDrink: 'Margarita',
      category: 1,
      alcoholic: 1,
      strInstructions: 'Mix all ingredients in a shaker with ice. Shake and strain into a chilled cocktail glass.',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
      strIngredient1: 1,
      strIngredient2: 2,
      strIngredient3: 3,
      strIngredient4: 4,
      strIngredient5: 5,
      strIngredient6: 6,
      strMeasure1: 1,
      strMeasure2: 2,
      strMeasure3: 3,
      strMeasure4: 4,
      strMeasure5: 5,
      strMeasure6: 6,
    },
    {
      idDrink: 2,
      strDrink: 'Mojito',
      category: 1,
      alcoholic: 1,
      strInstructions: 'Muddle mint springs with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg',
      strIngredient1: 2,
      strIngredient2: 2,
      strIngredient3: 4,
      strIngredient4: 5,
      strIngredient5: 6,
      strIngredient6: 1,
      strMeasure1: 1,
      strMeasure2: 2,
      strMeasure3: 5,
      strMeasure4: 1,
      strMeasure5: 2,
      strMeasure6: 4,
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('drinks', null, {});
  }
};
