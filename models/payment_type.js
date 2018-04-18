'use strict';
module.exports = (sequelize, DataTypes) => {
  var Payment_Type = sequelize.define('Payment_Type', {
    payment_type_name: DataTypes.STRING,
    payment_type_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    account_number: DataTypes.INTEGER
  }, {});
  Payment_Type.associate = function(models) {
    // associations can be defined here
  };
  return Payment_Type;
};