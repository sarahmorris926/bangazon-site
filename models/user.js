'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.TEXT,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {tableName: "users", timestamps: false});
  User.associate= (models) => {
    User.hasMany(models.Product, {
      foreignKey: "user_id"
    });
    User.hasMany(models.Orders, {
      foreignKey: "user_id"
    });
    User.hasMany(models.Payment_Type, {
      foreignKey: "user_id"
    });
  };

  return User;
};
