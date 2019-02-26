const express = require('express');
const app = express();
const Parse = require("parse/node");

Parse.initialize("APPLICATION_ID",   "JAVASCRIPT_KEY");
Parse.serverURL = "https://parseapi.back4app.com";

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/cars', (req, res) => {
    console.log("\nSearching...\n");
    const Cars = Parse.Object.extend("Cars");
    const query = new Parse.Query(Cars);
    query.find().then(result => {
        res.send(result);
    }).catch(error => {
        res.send(error);
    });
});

app.get('/cars/:query', (req, res) => {
    console.log("\nSearching...\n");
    const Cars = Parse.Object.extend("Cars");
    const query = new Parse.Query(Cars);
    query.equalTo("color", req.params.query);
    query.find().then(result => {
        res.send(result);
    }).catch(error => {
        res.send(error);
    });
});

app.listen(3000, () => console.log('App listening on port 3000!'));
