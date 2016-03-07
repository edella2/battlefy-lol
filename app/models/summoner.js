var mongoose = require('mongoose');

module.exports = mongoose.model('Summoner', {
    name: {
        type: String,
        default: ''
    },
});