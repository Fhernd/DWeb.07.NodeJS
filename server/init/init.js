const mongojs = require('mongojs');

var db = mongojs('mongodb://fhernd:admin2017@ds133932.mlab.com:33932/apitodos', ['users']);
var User = require('../models/user');

module.exports = () => {
    let nuevoUsuario = new User({user: 'oliva', password: 'Usr2k15'});

    db.users.save(nuevoUsuario, (err, resultado) => {
        if(err){
            throw err;
        } else {
            console.log('Base de datos inicializada.');
        }
    });
};
