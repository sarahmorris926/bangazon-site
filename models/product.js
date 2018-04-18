'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    product_name: DataTypes.STRING,
    product_type: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    customer_id: DataTypes.INTEGER,
    listing_date: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};