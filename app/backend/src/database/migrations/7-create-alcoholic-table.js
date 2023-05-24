module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('alcoholics', {
      idAlcoholic: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      strAlcoholic: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('alcoholics');
  },
};
