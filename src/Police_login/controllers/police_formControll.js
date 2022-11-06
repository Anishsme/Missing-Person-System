'use strict';

const firebase = require('../db');
const police_database = require("../models/police_database");
const firestore = firebase.firestore();

const addpolice_databse = async (req, res, next) => {
    try{
        const data = req.body;
        const police_database = await firestore.collection('police_database').doc().set(data);
        res.send('Record saved succesfully');
    }catch (error){
        res.status(400).send(error.message);
    }
}

const getAllPolicedata = async(req, res, next) => {
    try {
        const police_database = await firestore.collection('police_database');
        const data = await police_database.get();
        const police_databaseArray = [];
        if(data.empty) {
            res.status(404).send('No record found');
        }else {
            data.forEach(doc => {
                const police_database = new police_database(
                    doc.department_id, 
                    doc.data().department_name, 
                    doc.data().operator_id, 
                    doc.data().password, 
                    doc.data().district_name, 
                    doc.data().branch_name

                );
                police_databaseArray.push(police_database);
            });
            res.send(police_databaseArray)
        }
    } catch(error) {
        res.status(400).sed(error.message);
    }
}
const getPolicedata = async(req, res, next) => {
    try {
        const id = req.params.id;
        const police_database = await firestore.collection('studentdatabase').doc(id);
        const data = await police_database.get();
        if(!data.exists) {
            res.status(404).send('Crime with the given id not found');
        
    }else {
        res.send(data.data());
    }
}catch (error) {
    res.status(404).send(error.message);
}

}

module.exports = {
    addpolice_databse,
    getAllPolicedata,
    getPolicedata,
}