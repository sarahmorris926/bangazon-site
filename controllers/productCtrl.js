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
            let productsByDate = orderByDate(products);
            console.log("productsByDate", productsByDate);
            res.render("home", {
                productsByDate
            });
        });
}


function compareNumbers(a, b) {
    if (a.listing_date > b.listing_date)
        return -1;
    if (a.listing_date < b.listing_date)
        return 1;
    return 0;
}
const orderByDate = (array) => {
    return array.sort(compareNumbers);
}

