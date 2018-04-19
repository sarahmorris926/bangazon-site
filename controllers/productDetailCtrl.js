"use strict";

const express = require("express");
const app = express();
const passport = require("passport");

app.set("models", require("../models"));

module.exports.getProductDetails = (req, res, next) => {
    const { Product } = app.get("models");
    const { Product_Type } = app.get("models");
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