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

module.exports.displayProductsByCategory = (req, res, next) => {
    const { Product } = req.app.get("models");
    Product.findAll({
        raw: true,
        where: { product_type_id: req.params.id },
    })
        .then(products => {
            res.render("productsDetail", {
                products
            });
        });
};

module.exports.getActiveOrder = (req, res, next) => {
    const { Orders, Product } = req.app.get("models");
    if (req.session.passport.user != undefined) { 
        Orders.findOne({
            raw: true,
            where: { user_id: req.session.passport.user.id, payment_type_id: null }
        })
            .then(order => {
                res.render("cart", {
                    order
                }
            );   
        });
    } else {
        console.log("hey!");
        res.redirect("/login");
    }
}