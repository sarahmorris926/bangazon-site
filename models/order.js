'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    order_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    payment_type: DataTypes.INTEGER,
    order_creation_date: DataTypes.STRING
  }, {tableName: "order", timestamps: false});
  Order.associate = function(models) {
    Order.belongsTo(model.Payment_Type, {
      foreignKey: "payment_type_id"
    });
    Order.belongsTo(model.Order, {
      foreignKey: "user_id"
    });
    Order.belongsToMany(model.Product, {
      through: "order_product"
    });
  };
  return Order;
};