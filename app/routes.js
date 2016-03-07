var Summoner = require('./models/summoner');
var request = require('request');

function getSummonerByName(name) {
    var summonerName = name
    request("https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + summonerName + "?api_key=eeadbecb-9b8f-4377-8895-98f9eaa9406e", function (error, response, body) {
        var data = JSON.parse(body)
        return getSummonerById(data[summonerName].id)
    });
}

function getSummonerById(id) {
    var id = id
    request("https://na.api.pvp.net/api/lol/na/v1.4/summoner/" + id + "?api_key=eeadbecb-9b8f-4377-8895-98f9eaa9406e", function (error, response, body) {
        console.log("in getSummoner")
        var data = JSON.parse(body)
        console.log(data)
        return body;
    })

};

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all summoners

    app.get('/api/summoners/', function (req, res) {
        // use mongoose to get all summoners in the database

    });

    app.get('/api/summoners/:name', function(req, res) {
        getSummonerByName(req.params.name)

    })

    // create summoner and send back all summoners after creation

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};