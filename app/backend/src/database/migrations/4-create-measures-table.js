module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('measures', {
      idMeasure: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      strMeasure: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('measures');
  },
};
