'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      c_name: {
        type: Sequelize.STRING
      },
      c_lastname: {
        type: Sequelize.STRING
      },
      c_email: {
        type: Sequelize.STRING
      },
      c_tel: {
        type: Sequelize.STRING
      },
      c_num: {
        type: Sequelize.STRING
      },
      c_mu: {
        type: Sequelize.STRING
      },
      c_tanon: {
        type: Sequelize.STRING
      },
      c_soi: {
        type: Sequelize.STRING
      },
      c_tumbon: {
        type: Sequelize.STRING
      },
      c_amphor: {
        type: Sequelize.STRING
      },
      c_jungwan: {
        type: Sequelize.STRING
      },
      c_sex: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('customers');
  }
};