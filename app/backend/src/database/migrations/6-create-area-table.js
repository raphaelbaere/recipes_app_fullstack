module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('areas', {
      idArea: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      strArea: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('areas');
  },
};
