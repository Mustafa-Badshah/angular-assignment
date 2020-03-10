var connect = require("../config/connect");
var database = require("../config/database");

module.exports.insert = function(req_body, func) {
    connect(function(err, client) {
        var db = client.db(database.dbName);
        db.collection("product").insert(req_body, func)
    })
}

module.exports.search = function(where, func) {
    connect(function(err, client) {
        var db = client.db(database.dbName);
        db.collection("product").find(where).toArray(func)
    })
}

module.exports.update = function(where, obj, func) {
    connect(function(err, client) {
        var db = client.db(database.dbName)
        db.collection("product").update(where, { $set: obj }, func)
    })
}

module.exports.delete = function(where, func) {
    connect(function(err, client) {
        var db = client.db(database.dbName)
        db.collection("product").remove(where, func)
    })
}