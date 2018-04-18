'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.TEXT,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {tableName: "user", timestamps: false});
  User.associate= (models) => {
    User.hasMany(model.Product, {
      foreignKey: "user_id"
    });
    User.hasMany(model.Order, {
      foreignKey: "user_id"
    });
    User.hasMany(model.Payment_Type, {
      foreignKey: "user_id"
    });
  };

  return User;
};
