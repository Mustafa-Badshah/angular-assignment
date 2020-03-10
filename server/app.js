var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var routes = require("./config/routes")



app.use(bodyParser());
app.use(cors());


app.use(routes);
app.listen(5253, function() {
    console.log("Server is Running 5253 Port No..... !")
})