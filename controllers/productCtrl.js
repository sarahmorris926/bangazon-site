"use strict";

const express = require("express");
const app = express();
const passport = require("passport");


module.exports.getLatestProducts = (req, res, next) => {
    console.log("tdog");
    const { Product } = req.app.get("models");
    Product.findAll({
        raw: true
    })
    .then(products => {
        console.log(products);
        res.render("home", {
            products
        });
        });
    }