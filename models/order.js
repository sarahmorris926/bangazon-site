'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    order_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    payment_type: DataTypes.INTEGER,
    order_creation_date: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};