var express = require("express");
var routes = express.Router();
var User = require("../model/user");
var sha1 = require("sha1");






routes.post("/", function(req, res) {
    req.body.password = sha1(req.body.password)
    User.save(req.body, function(err, result) {
        res.send(result.ops[0]);
    })
})

module.exports = routes;