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
      strIngredient1: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'mealIngredients', key: 'idIngredient' },
      },
      strIngredient2: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'mealIngredients', key: 'idIngredient' },
      },
      strIngredient3: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'mealIngredients', key: 'idIngredient' },
      },
      strIngredient4: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'mealIngredients', key: 'idIngredient' },
      },
      strIngredient5: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'mealIngredients', key: 'idIngredient' },
      },
      strIngredient6: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'mealIngredients', key: 'idIngredient' },
      },
      strMeasure1: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'mealMeasures', key: 'idMeasure' },
      },
      strMeasure2: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'mealMeasures', key: 'idMeasure' },
      },
      strMeasure3: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'mealMeasures', key: 'idMeasure' },
      },
      strMeasure4: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'mealMeasures', key: 'idMeasure' },
      },
      strMeasure5: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'mealMeasures', key: 'idMeasure' },
      },
      strMeasure6: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'mealMeasures', key: 'idMeasure' },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('meals');
  }
};
