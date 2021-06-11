'use strict';
module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define('Permission', {
    user_id: DataTypes.INTEGER,
    permission: DataTypes.STRING,
    dzongkhag: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  Permission.associate = function(models) {
    // associations can be defined here
    Permission.belongsTo(models.User, {foreignKey:'user_id',as:'user'})
  };
  return Permission;
};