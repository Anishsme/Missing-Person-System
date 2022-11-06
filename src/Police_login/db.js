const firebase = require('firebase');
const config = require('./config');

const db = firebase.initalizaApp(config.firebaseConfig);
module.exports = db;