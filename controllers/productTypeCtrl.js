"use strict";

const express = require("express");
const app = express();
const passport = require("passport");

module.exports.getAllProductCategories = (req, res, next) => {
	const { Product_Type, Product } = req.app.get('models');
	Product_Type.findAll({
		raw: true,
	})
		.then(Product_Types => {
			res.render('productCategories', { Product_Types });
		})
		.catch(err => {
			next(err);
		});
};
