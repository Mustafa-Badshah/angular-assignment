var express = require("express")
var routes = express.Router()
var Product = require("../model/product");
var mongodb = require("mongodb")
var Backdoor = require("../helper/logbackdoor")





routes.get("/", Backdoor, function(req, res) {
    Product.search({}, function(err, result) {
        res.send(result);
    });
});

routes.post("/", Backdoor, function(req, res) {
    req.body.product_price = parseInt(req.body.product_price);
    req.body.product_discount = parseInt(req.body.product_discount);
    Product.insert(req.body, function(err, result) {
        res.send(result.ops[0]);
    });
});

routes.put("/:id", Backdoor, function(req, res) {
    var id = req.params.id;
    delete req.body._id;
    Product.update({ _id: mongodb.ObjectId(id) }, req.body, function(err, result) {
        res.send({ success: true });
    });
});

routes.delete("/:id", Backdoor, function(req, res) {
    var id = req.params.id;
    Product.delete({ _id: mongodb.ObjectId(id) }, function(err, result) {
        res.send({ success: true })
    })
})

module.exports = routes