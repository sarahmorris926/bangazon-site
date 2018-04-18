'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product_Type = sequelize.define('Product_Type', {
    product_type_id: DataTypes.INTEGER,
    label: DataTypes.STRING
  }, {});
  Product_Type.associate = function(models) {
    // associations can be defined here
  };
  return Product_Type;
};