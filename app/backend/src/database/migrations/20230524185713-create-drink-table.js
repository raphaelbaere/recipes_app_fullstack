'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('drinks', {
      idDrink: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      strDrink: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      category: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'drinkCategories', key: 'idCategory' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      alcoholic: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'alcoholics', key: 'idAlcoholic' },
      },
      strInstructions: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      strDrinkThumb: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      strIngredient1: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'drinkIngredients', key: 'idIngredient' },
      },
      strIngredient2: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'drinkIngredients', key: 'idIngredient' },
      },
      strIngredient3: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'drinkIngredients', key: 'idIngredient' },
      },
      strIngredient4: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'drinkIngredients', key: 'idIngredient' },
      },
      strIngredient5: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'drinkIngredients', key: 'idIngredient' },
      },
      strIngredient6: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'drinkIngredients', key: 'idIngredient' },
      },
      strMeasure1: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'drinkMeasures', key: 'idMeasure' },
      },
      strMeasure2: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'drinkMeasures', key: 'idMeasure' }, 
      },
      strMeasure3: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'drinkMeasures', key: 'idMeasure' }, 
      },
      strMeasure4: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'drinkMeasures', key: 'idMeasure' }, 
      },
      strMeasure5: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'drinkMeasures', key: 'idMeasure' }, 
      },
      strMeasure6: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'drinkMeasures', key: 'idMeasure' }, 
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('drinks');
  }
};
