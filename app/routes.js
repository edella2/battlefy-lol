var Summoner = require('./models/summoner');
var request = require('request');

function getSummonerByName(req, res, next) {
    var summonerName = req.params.name
    request("https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + summonerName + "?api_key=eeadbecb-9b8f-4377-8895-98f9eaa9406e", function (error, response, body) {
        if (error) {
            res.send(error)
        } else {
            console.log(body)
            res.send(JSON.parse(body)[summonerName])
        }
    });
}

function getMatchesById(req, res, next) {
    var id = req.params.id
    request("https://na.api.pvp.net/api/lol/na/v2.2/matchlist/by-summoner/" + id + "?api_key=eeadbecb-9b8f-4377-8895-98f9eaa9406e", function (error, response, body) {
        if (error) {
            res.send(error)
        } else {
            res.send(JSON.parse(body))
        }
    })
}

function getSummonerStats(req, res, next) {
    var id = req.params.id
    request("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/" + id + "/summary?season=SEASON2016&api_key=eeadbecb-9b8f-4377-8895-98f9eaa9406e", function(error, response, body) {
        if (error) {
            res.send(error)
        } else {
            console.log(JSON.parse(body))
            res.send(JSON.parse(body))
        }
    })
}

module.exports = function (app) {

    // api ---------------------------------------------------------------------

    // get summoner by name
    app.get('/api/summoners/:name', getSummonerByName)
    app.get('/api/matches/:id', getMatchesById)
    app.get('/api/stats/:id', getSummonerStats)
    // app.get('/api/matches/')
    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};