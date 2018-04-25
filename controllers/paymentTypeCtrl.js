"use strict";

const express = require("express");
const app = express();
const passport = require("passport");

module.exports.addPaymentType = (req, res, next) => {
    const { Payment_Type } = req.app.get("models");
    Payment_Type.create( {
        payment_type_name: req.body.payment_type_name,
        user_id: req.session.passport.user.id,
        account_number: req.body.account_number
    })
    .then(payment_type => {
        res.render("paymentTypeAdded", {
            payment_type
        });
    });
}

module.exports.displayPaymentTypeForm = (req, res, next) => {
    res.render("addPaymentType");
}

module.exports.getAllPaymentTypes = (req, res, next) => {
    const { Payment_Type } = req.app.get("models");
    Payment_Type.findAll({
        raw: true,
        where: {user_id: req.session.passport.user.id}
    })
    .then( PaymentArr => {
        res.render("addPaymentType", {
            PaymentArr
        });
    });
}


