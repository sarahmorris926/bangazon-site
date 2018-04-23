"use strict";

const express = require("express");
const app = express();
const passport = require("passport");

module.exports.deleteProduct = (req, res, next) => {
    const { Product } = req.app.get("models");
    Product.destroy( {
        where: {id: req.params.id }
    })
    .then( (product) => {
        console.log(`Product has been deleted`);
    })
    .catch( error => {
        res.status(500).json(error);
        next(error);
    });
}