'use strict';
module.exports = (sequelize, DataTypes) => {
  var order_product = sequelize.define('order_product', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    }

  }, {timestamps:false});

  return order_product;
};