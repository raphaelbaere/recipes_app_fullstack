'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('meals', [{
      idMeal: 1,
      strMeal: 'Baked salmon with fennel & tomatoes',
      category: 1,
      area: 2,
      strInstructions: 'Heat oven to 180C/160C fan/gas 4. Toss the fennel and tomatoes together with half the oil in a shallow roasting tin. Season with salt and pepper, then roast for 15 mins.',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/1548772327.jpg',
      strTags: 'Paleo,Keto,LowFat',
      strYoutube: 'https://www.youtube.com/watch?v=MRMcdUg4y6I',
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
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('meals', null, {});
  }
};
