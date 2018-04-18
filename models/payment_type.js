'use strict';
module.exports = (sequelize, DataTypes) => {
  var Payment_Type = sequelize.define('Payment_Type', {
    payment_type_name: DataTypes.STRING,
    payment_type_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    account_number: DataTypes.INTEGER
  }, {tableName: "payment_type", timestamps: false});
  Payment_Type.associate = function(models) {
    Payment_Type.belongsTo(model.User, {
      foreignKey: "user_id", 
      onDelete: "CASCADE"
    });
    Payment_Type.hasMany(model.Order, {
      foreignKey: "payment_type_id"
    });
  };
  return Payment_Type;
};