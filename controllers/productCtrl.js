"use strict";

const express = require("express");
const app = express();
const passport = require("passport");



module.exports.postOrderProduct = (req, res, next) => {
  //user id 12 clicks add product to cart
  //user id 12 has an open order of id 2 with 3 prods
  //user id 12 has prod 4 added to order id 2 
  //user id 12 views all 4 prods in his cart when he clicks on cart 

  const {
    Orders
  } = req.app.get("models");

  const {
    Order_Product
  } = req.app.get("models");


  //find order or make a new one 
  // add the product to the join table w/ prod id from route and w/ order id from the find 
  Orders.findOrCreate({
      raw: true,
      where: {
        payment_type_id: null,
        user_id: req.session.passport.user.id
      }, defaults: {order_creation_date: '2018-04-23'}
    })
    .spread((order, created) => {
      console.log(order.get({
        plain: true
      }))
      order.addProduct(order.user_id);
      console.log(created)
    })
  };