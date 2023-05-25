'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('meals', {
      idMeal: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      strMeal: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      category: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'mealCategories', key: 'idCategory' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      area: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'areas', key: 'idArea' },
      },
      strInstructions: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      strMealThumb: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      strTags: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      strYoutube: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      strIngredient: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
        foreignKey: true,
        references: { model: 'recipesModel', key: 'ingredients' },
      },
      // strMeasure: {
      //   type: Sequelize.STRING,
      //   allowNull: false,
      //   foreignKey: true,
      //   references: { model: 'mealMeasures', key: 'idMeasure' },
      // },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('meals');
  }
};
