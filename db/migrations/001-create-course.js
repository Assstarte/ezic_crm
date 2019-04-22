'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      course_name: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM("started", "in_progress")
      },
      price_per_month: {
        type: Sequelize.FLOAT(7,2)
      },
      quantity_students_planned: {
        type: Sequelize.INTEGER
      },
      quantity_students_initial: {
        type: Sequelize.INTEGER
      },
      qunatity_students_now: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Courses');
  }
};