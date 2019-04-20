"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      login: DataTypes.STRING,
      password: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {
      timestamps: true
    }
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
