var express = require('express');
var request = require('request');
var cors = require('cors');
var config = require('./config.js');
var app = express();

app.use(cors({ origin: 'http://localhost:3225' }));

app.get('/Steam/GamesList/:profileid', function (httpRequest, httpResponse) {
    var profileId = httpRequest.params.profileid;

    var url = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=" + config.config() + "&steamid=" + profileId + "&format=json";

    request.get(url, function (error, steamResponse, steamBody) {
        httpResponse.setHeader('Content-Type', 'application/json');
        httpResponse.send(steamBody);
    });
});

app.listen(3000);

