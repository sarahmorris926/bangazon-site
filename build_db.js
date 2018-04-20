
'use strict'

let models = require("./models");
let { orders } = require("./seeders/data/orders");
let { payment_types } = require("./seeders/data/payment_types");
let { product_types } = require("./seeders/data/product_types");
let { products } = require("./seeders/data/products");
let { users } = require("./seeders/data/users")
 
models.sequelize.sync({force: true})
.then(()=>{
  return models.User.bulkCreate(users)
})
.then(()=>{
  return models.Payment_Type.bulkCreate(payment_types)
})
.then(()=>{
  return models.Product_Type.bulkCreate(product_types)
})
.then(()=>{
  return models.Product.bulkCreate(products)
})
.then(()=>{
  return models.Orders.bulkCreate(orders)
})
.then(()=>{
  process.exit();
});