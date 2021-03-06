"use strict";
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define(
    "Course",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      course_name: DataTypes.STRING,
      status: DataTypes.ENUM("started", "in_progress"),
      price_per_month: DataTypes.FLOAT(7, 2),
      quantity_students_planned: DataTypes.INTEGER,
      quantity_students_initial: DataTypes.INTEGER,
      quantity_students_now: DataTypes.INTEGER,
      course_start_date: DataTypes.DATE,
      course_end_date: DataTypes.DATE
    },
    {
      timestamps: true
    }
  );
  Course.associate = function(models) {};

  return Course;
};
