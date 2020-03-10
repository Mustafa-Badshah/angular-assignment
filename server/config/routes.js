var express = require("express");
var routes = express.Router();

routes.use("/api/user", require("../controllers/user"));
routes.use("/api/login", require("../controllers/login"));
routes.use("/api/product", require("../controllers/product"));




module.exports = routes;