"use strict";

const express = require("express");
const app = express();
const passport = require("passport");

module.exports.getUser = (req, res, next) => {
    const { User } = req.app.get("models");
    User.findOne({
        raw: true,
        where: { id: req.params.id }
    })
    .then(user => {
        res.render("profile", {
            user
        });
    });
}