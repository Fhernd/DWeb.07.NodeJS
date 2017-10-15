const EXPRESS = require('express');
const mongojs = require('mongojs');
const MONGOOSE = require('mongoose');
var Event = require('../models/event');

var db = mongojs('mongodb://fhernd:admin2017@ds133932.mlab.com:33932/apitodos', ['events']);

let router = EXPRESS.Router();

router.get('/events', (req, res, next) => {
    db.events.find((err, events) => {
        if (err) {
            res.send(err);
        } else {
            res.json(events);
        }
    });
});

router.post('/events', (req, res, next) => {
    const _ID = new MONGOOSE.Types.ObjectId();
    let nuevoEvento = new Event({
        _id: _ID,
        id: _ID,
        title: req.body.title,
        start: req.body.start,
        end: req.body.end
    });

    db.events.save(nuevoEvento, (err, resultado) => {
        if(err) {
            res.send(err);
        } else {
            res.json(resultado);
        }
    });
});

router.put('/events/:id', (req, res, next) => {
    db.events.update({
        _id: mongojs.ObjectId(req.params.id)
    }, req.body, {}, (err, resultado) => {
        if(err){
            res.send(err);
        } else {
            res.json(resultado);
        }
    });
});

router.delete('/events/:id', (req, res, next) => {
    db.events.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, {}, (err, resultado) => {
        if(err){
            res.send(err);
        } else {
            res.json(resultado);
        }
    })
});

module.exports = router;
