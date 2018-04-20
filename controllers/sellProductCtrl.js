'use strict';

const express = require('express');
const app = express();
const passport = require('passport');

module.exports.displaySellProduct = (req, res) => {
  res.render('sellProduct');
};

module.exports.sellProduct = (req, res, next) => {
  const { Product } = req.app.get('models');
  Product.create(req.body).then(data => {
    console.log("new data", data);
    res.json(data)
  });
};

// app.post("/directors", (req, res, next) => {
//   console.log("req.body", req.body);
//   Director.create(req.body).then(data => {
//     // We get the added obj back with its ID. AWESOME
//     console.log("New director", data.name);
//     res.json(data);
//   });
// });