var Summoner = require('./models/summoner');
var request = require('request');

function getSummonerByName(req, res, next) {
    var summonerName = req.params.name
    request("https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + summonerName + "?api_key=eeadbecb-9b8f-4377-8895-98f9eaa9406e", function (error, response, body) {
        if (error) {
            res.send(error)
        } else {
            res.send(JSON.parse(body)[summonerName])
        }
    });
}


module.exports = function (app) {

    // api ---------------------------------------------------------------------

    // get summoner by name
    app.get('/api/summoners/:name', getSummonerByName)


    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};