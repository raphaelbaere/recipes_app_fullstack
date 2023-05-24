'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('alcoholics', [{
      idAlcoholic: 1,
      strAlcoholic: 'Alcoholic',
    },
    {
      idAlcoholic: 2,
      strAlcoholic: 'Non alcoholic',
    },
    {
      idAlcoholic: 3,
      strAlcoholic: 'Optional alcohol',
    }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('alcoholics', null, {});
  }
};
