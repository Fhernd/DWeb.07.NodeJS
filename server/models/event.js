const MONGOOSE = require('mongoose');
let Schema = MONGOOSE.Schema;

var schEvent = new Schema({
    id: {type: String, required: true},
    title: {type: String, required: true},
    start: {type: String, required: false},
    end: {type: String, required: false}
});

let Event = MONGOOSE.model('Event', schEvent);

module.exports = Event;
