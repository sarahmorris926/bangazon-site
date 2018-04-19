'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product_Type = sequelize.define('Product_Type', {
    label: DataTypes.STRING
  }, {tableName: "product_type", timestamps: false});
  Product_Type.associate = function(models) {
    Product_Type.hasMany(models.Product, {
      foreignKey: "product_type_id"
    });
  };
  return Product_Type;
};