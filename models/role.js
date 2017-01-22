'use strict';
module.exports = function(sequelize, DataTypes) {
  var Role = sequelize.define('Role', {
    host: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [5, 35]  
    }
  }, {
    classMethods: {
      associate: function(models) {
        Role.hasOne(models.Listing);
      }
    }
  });
  return Role;
};