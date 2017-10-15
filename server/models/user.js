const MONGOOSE = require('mongoose');

var Schema = MONGOOSE.Schema;

var schUser = new Schema({
    user: {type: String, required: true},
    password: {type: String, required: true}
});

var User = MONGOOSE.model('User', schUser);

module.exports = User;
