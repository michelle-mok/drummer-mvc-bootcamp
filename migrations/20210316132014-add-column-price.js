module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'drummers',
      'price',
      { type: Sequelize.INTEGER },
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('drummers', 'price');
  },
};
