"use strict";

const express = require("express");
const app = express();
const passport = require("passport");

module.exports.getProductDetails = (req, res, next) => {
    const { Product } = req.app.get("models");
    const { Product_Type } = req.app.get("models");
    Product.findOne({
        raw: true,
        where: { id: req.params.id },
        include: [{ model: Product_Type }]
    })
        .then(product => {
        res.render("productDetail", {
            product
        });
    });
};


// module.exports.getActiveOrder = (req, res, next) => {
//   const { Orders, Product } = req.app.get("models");
//   if (req.session.passport != undefined) { 
//       Orders.findOne({
//           raw: true,
//           where: { user_id: req.session.passport.user.id, payment_type_id: null }
//       })
//           .then(order => {
//               res.render("cart", {
//                   order
//               }
//           );   
//       });
//   } else {
//       res.redirect("/login");
//   }