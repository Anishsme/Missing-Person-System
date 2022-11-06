const express = require('express')
const { addpolice_databse, getAllPolicedata, getPolicedata } = require('../controllers/police_formControll');
const router = express.Router();
router.post('./police_database', addpolice_databse);
router.get('/police_database', getAllPolicedata);
router.get('/Policedata/:id', getPolicedata);
module.exports = {
    routes: router
}
