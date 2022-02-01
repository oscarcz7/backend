import express from 'express'
import Classification from '../models/classification';
const router = express.Router();
//Importar el modelo
const _ = require('underscore');
const {userVerification, adminVerification} = require('../authentication/authentication.js')

router.post('/newClassification', async (req, res) => {
    
    const body = {
        esrbCode : req.body.esrbCode,
        esrbAge : req.body.esrbAge,
    }

    try{
        const classificationDB = await Classification.create(body);
        res.status(200).json(classificationDB)
    } catch(e){
        return res.status(500).json({
            message: 'Error al crear Usuario',
            e
        });
    }
});

router.get('/classification',[], async (req, res) => {
    try {
        const classificationDB = await Classification.find();
        res.json(classificationDB)
    } catch (e) {
        return res.status(500).json({
            message: 'Error al obtener',
            e
        });
    }
});

module.exports = router