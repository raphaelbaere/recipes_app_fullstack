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
      strIngredient: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'drinkIngredients', key: 'idIngredient' },
      },
      strMeasure: {
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
