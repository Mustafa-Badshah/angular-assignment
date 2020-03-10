var express = require("express");
var routes = express.Router()
var jwt = require("jsonwebtoken");
var sha1 = require("sha1")
var User = require("../model/user");
var mongodb = require("mongodb")
var Backdoor = require("../helper/logbackdoor")


routes.post("/", function(req, res) {
    var e = req.body.email;
    var p = req.body.password;
    User.search({ email: e }, function(err, result) {
        if (result.length >= 1) {
            if (result[0].password == sha1(p)) {
                var token = jwt.sign({ id: result[0]._id, name: result[0].name }, "this is my secret key", { expiresIn: 3600 });
                res.status(200).send({
                    success: true,
                    token
                });
            } else {
                res.status(401).send({
                    success: false,
                    msg: "This Password is Incorrect"
                })
            }
        } else {
            res.status(401).send({
                success: false,
                msg: "This Username And Password is Incorrect"
            })
        }
    });
});

// function Backdoor(req, res, next) {
//     console.log("------------", req.headers.authorization)
//     if (!req.headers.authorization) {
//         res.status(401).send({ msg: "Unathorized User" });
//     } else {
//         if (req.headers.authorization == "") {
//             res.status(401).send({ msg: "Unathorized User" });
//         } else {
//             var token = req.headers.authorization;
//             var payload = jwt.verify(token, "this is my secret key");
//             if (!payload) {
//                 res.status(401).send({ msg: "Unathorized User" });
//             } else {
//                 req.userData = payload;
//                 next();
//             }
//         }
//     }
// }

routes.get("/getuser", Backdoor, function(req, res) {
    var id = req.userData.id;
    User.search({ _id: mongodb.ObjectId(id) }, function(err, result) {
        delete result[0].password;
        res.send(result[0]);
    })
})

module.exports = routes;