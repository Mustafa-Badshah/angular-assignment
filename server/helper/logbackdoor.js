var jwt = require("jsonwebtoken");









module.exports = function(req, res, next) {
    if (!req.headers.authorization) {
        res.status(401).send({ msg: "Unathorized User" });
    } else {
        if (req.headers.authorization == "") {
            res.status(401).send({ msg: "Unathorized User" });
        } else {
            var token = req.headers.authorization;
            var payload = jwt.verify(token, "this is my secret key");
            if (!payload) {
                res.status(401).send({ msg: "Unathorized User" });
            } else {
                req.userData = payload;
                next();
            }
        }
    }
}