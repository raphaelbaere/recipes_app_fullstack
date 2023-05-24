module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ingredients', {
      idIngredient: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      strIngredient: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('ingredients');
  },
};
