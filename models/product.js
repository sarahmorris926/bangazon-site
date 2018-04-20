'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    product_name: DataTypes.STRING,
    product_type_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    listing_date: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {tableName: "product", timestamps: true});
  Product.associate = function(models) {
    Product.belongsTo(models.Product_Type, {
      foreignKey: "product_type_id"
    });
    Product.belongsTo(models.User, {
      foreignKey: "user_id"
    });
    Product.belongsToMany(models.Orders, {
      through: "order_product",
      as: "ProductOnOrder"
    })
  };
  return Product;
};