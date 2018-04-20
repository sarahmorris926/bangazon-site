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
