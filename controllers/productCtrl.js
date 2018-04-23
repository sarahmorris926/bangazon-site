"use strict";

const express = require("express");
const app = express();
const passport = require("passport");



module.exports.postOrderProduct = (req, res, next) => {
  //user id 12 clicks add product to cart
  //user id 12 has an open order of id 2 with 3 prods
  //user id 12 has prod 4 added to order id 2 
  //user id 12 views all 4 prods in his cart when he clicks on cart 
  let orderToAddTo;

  const {
    Orders,
    Product
  } = req.app.get("models");

  //find order or make a new one 
  // add the product to the join table w/ prod id from route and w/ order id from the find 
  Orders.findOrCreate({
      raw: true,
      where: {
        payment_type_id: null,
        user_id: req.session.passport.user.id
      },
      defaults: {
        order_creation_date: '2018-04-23'
      }
    })
    .spread((instance, created) => {
      orderToAddTo = instance;
      console.log(instance, created, "i N ST A  DNSDF ");
      Product.findById(req.params.id)
        .then(product => {
          Orders.findById(instance.id)
            .then(instance => {
              instance.addProduct(product);
            })
        })
    })
    // .spread((order, created) => {
    //   console.log(order.get({
    //     plain: true
    //   }), " S P R E A D  O R D E R")
    //   order.addProduct(order.user_id);
    //   console.log(created, "C R E A T E D")
    // })
    .catch(err => {
      console.log(err, "error");
    })
};