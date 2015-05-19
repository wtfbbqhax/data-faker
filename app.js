#!/usr/bin/env node

// May 19, 2015
// Victor Roemer, <victor@badsec.org>.

// An http server that generates toy data that I use
// when playing with docker + elasticsearch (and more!).

var express = require("express");
var faker   = require("faker");

var app = express();

app.get('/api/users', function(req, res) {
    var users = [];
    var count = req.query.count && parseInt(req.query.count) || 10;
    for (var i=0; i<count; i++) {
        users.push({ name:     faker.name.findName(),
                     email:    faker.internet.email(),
                     address:  faker.address.streetAddress(),
                     bio:      faker.lorem.sentence(),
                     image:    faker.image.avatar(),
                     lastseen: faker.date.recent() });
    }
    res.json({ doc: users });
});

app.listen(3000);
