'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Deals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_course: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      id_teacher: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      id_client: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      id_employee_concluded: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      contact_number: {
        type: Sequelize.STRING
      },
      stage: {
        type: Sequelize.ENUM("new", "contract_signed", "payment", "success"),
        defaultValue: "new"
      },
      stage_date: {
        type: Sequelize.DATE
      },
      extra_info: {
        type: Sequelize.TEXT
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Deals');
  }
};