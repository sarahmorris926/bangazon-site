'use strict';
module.exports = (sequelize, DataTypes) => {
  var Payment_Type = sequelize.define('Payment_Type', {
    payment_type_name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    account_number: DataTypes.BIGINT
  }, {tableName: "payment_type", timestamps: false});
  Payment_Type.associate = function(models) {
    Payment_Type.belongsTo(models.User, {
      foreignKey: "user_id", 
      onDelete: "CASCADE"
    });
    Payment_Type.hasMany(models.Orders, {
      foreignKey: "payment_type_id"
    });
  };
  return Payment_Type;
};