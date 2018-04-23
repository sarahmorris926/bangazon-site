"use strict";

const express = require("express");
const app = express();
const passport = require("passport");


module.exports.getLatestProducts = (req, res, next) => {
    const { Product } = req.app.get("models");
    Product.findAll({
        raw: true
    })
        .then(products => {
            let prodArray = [];
            let productsByDate = orderByDate(products);
            for (let i = 0; i < 20; i++) {
                prodArray.push(productsByDate[i]);
            };
            console.log(products);
            res.render("home", {
                prodArray
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

