"use strict";

const express = require("express");
const app = express();
const passport = require("passport");



module.exports.postOrderProduct = (req, res, next) => {
    let orderToAddTo;

    let day = new Date();
    let dd = day.getDate();
    let mm = day.getMonth() + 1;
    let yyyy = day.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    day = yyyy + '-' + mm + '-' + dd;

    const {
        Orders,
        Product,
        order_product
    } = req.app.get("models");


    Orders.findOrCreate({
        raw: true,
        where: {
            payment_type_id: null,
            user_id: req.session.passport.user.id
        },
        defaults: {
            order_creation_date: `${day}`
        }
    })
        .spread((instance, created) => {
            orderToAddTo = instance;
            console.log(instance, created, "i N ST A  DNSDF ");
            Product.findById(req.params.id)
                .then(product => {
                    Orders.findById(instance.id)
                        .then(instance => {
                            order_product.create({ OrderId: instance.id, ProductId: req.params.id })
                        })
                })
        })
        .catch(err => {
            console.log(err, "error");
        })
};
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
    const { Orders, Product, order_product, Payment_Type } = req.app.get("models");
    if (req.session.passport != undefined) {
        Orders.findOne({
            raw: true,
            where: { user_id: req.session.passport.user.id, payment_type_id: null }
        })
            .then(order => {
                Payment_Type.findAll({
                    raw: true,
                    where: { user_id: req.session.passport.user.id }
                })
                    .then(paymentTypes => {
                        order_product.findAll({
                            raw: true,
                            where: { OrderId: order.id }
                        })
                            .then(orderProducts => {
                                let promiseArray = [];
                                orderProducts.forEach(ordProd => {
                                    if (ordProd.ProductId > 0) {
                                        promiseArray.push(Product.findOne({
                                            raw: true,
                                            where: { id: ordProd.ProductId }
                                        })
                                        )
                                    }
                                })
                                Promise.all(promiseArray)
                                    .then(products => {
                                        res.render("cart", {
                                            products, order, paymentTypes
                                        });
                                    });
                            });
                    })
            })
    } else {
        res.redirect("/login");
    }
}

