'use strict';
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  User.beforeCreate((user, options) => {
    user.password = bcrypt.hashSync(user.password,salt)
  });  
  return User;
};