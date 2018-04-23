'use strict';
module.exports = (sequelize, DataTypes) => {
  var Orders = sequelize.define('Orders', {
    user_id: DataTypes.INTEGER,
    payment_type_id: DataTypes.INTEGER,
    order_creation_date: DataTypes.STRING
  }, {tableName: "orders", timestamps: false, allowNull: true});
  Orders.associate = function(models) {
    Orders.belongsTo(models.Payment_Type, {
      foreignKey: "payment_type_id"
    });
    Orders.belongsTo(models.Orders, {
      foreignKey: "user_id"
    });
    Orders.belongsToMany(models.Product, {
      through: "order_product"
    });
  };
  return Orders;
}; 