"use strict";

const express = require("express");
const app = express();
const passport = require("passport");


// module.exports.deleteProduct = (req, res, next) => {
//     const { Product, Order_Products } = req.app.get("models");
//     // getOrders
//     // join table is order_products
//     Order_Products.findOne({
//         raw: true,
//         where: {ProductId: req.params.id }
//     })
//     .then( product => {
//         if(product) {
//             alert('This product cannot be deleted')
//         } else {
//             Product.destroy( {
//                 where: {id: req.params.id }
//             })
//             .then( (product) => {
//                 console.log(`Product has been deleted`);
                    // res.render('myProducts', {products})

//             })
//             .catch( error => {
//                 res.status(500).json(error);
//                 next(error);
//             });
//         }
//     })
// }



module.exports.deleteProduct = (req, res, next) => {
    const { Product } = req.app.get("models");
    // getOrders
    // join table is order_products
    Product.destroy( {
        where: {id: req.params.id }
    })
    .then( () => {
        Product.findAll( {
            raw: true,
            where: {user_id: req.session.passport.user.id},
            include: [{model: Product_Type, attributes: ["label"]}]
        })
        .then( products => {
            res.render('myProducts', {products})
        })
        // console.log(`Product has been deleted`);
        // // res.render('myProducts', {products})
        // module.exports.getUserProducts;
    })
    .catch( error => {
        res.status(500).json(error);
        next(error);
    });
}


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

module.exports.getUserProducts = (req, res, next) => {
    const { Product, Product_Type } = req.app.get("models");
    Product.findAll( {
        raw: true,
        where: {user_id: req.session.passport.user.id},
        include: [{model: Product_Type, attributes: ["label"]}]
    })
    .then( products => {
        res.render('myProducts', {products})
    })
}

module.exports.displayProductsByCategory = (req, res, next) => {
    const { Product } = req.app.get("models");
    Product.findAll({
        raw: true,
        where: {product_type_id: req.params.id},
    })
        .then(products=> {
        res.render("productsDetail", {
            products
        });
    });
};

