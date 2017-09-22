var express = require('express');
var request = require('request');
var cors = require('cors');
var config = require('./config.js');
var app = express();

/*
Steams public api does not allow front end applications to directly access it in any manner so
as a workaround I am calling the api from my own api endpoint on my local server
*/
app.use(cors({ origin: 'http://localhost:3225' }));

app.get('/Steam/GamesList/:profileid', function (httpRequest, httpResponse) {
    var profileId = httpRequest.params.profileid;

    var url = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key="
        + config.steamApiKey()
        + "&steamid=" + profileId
        + "&format=json&include_appinfo=1";

    request.get(url, function (error, steamResponse, steamBody) {
        httpResponse.setHeader('Content-Type', 'application/json');
        httpResponse.send(steamBody);
    });
});

app.listen(3000);

