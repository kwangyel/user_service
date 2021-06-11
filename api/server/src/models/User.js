'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    cid: DataTypes.STRING
  }, {
    timestamps: false
  });
  User.associate = function(models) {
    // associations can be defined here
    // User.belongsTo(models.hasMany,{foreignKey:'structure_id',as:'structure'})
  };
  return User;
};