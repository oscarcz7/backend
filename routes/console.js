import express from 'express'
import Console from '../models/console';
const router = express.Router();
//Importar el modelo
const _ = require('underscore');
const {userVerification, adminVerification} = require('../authentication/authentication.js')

router.post('/newConsole', async (req, res) => {
    
    const body = {
        consoleName : req.body.consoleName,
        consoleType : req.body.consoleType,
    }

    try{
        const consoleDB = await Console.create(body);
        res.status(200).json(consoleDB)
    } catch(e){
        return res.status(500).json({
            message: 'Error al crear Usuario',
            e
        });
    }
});

router.get('/console',[], async (req, res) => {
    try {
        const consoleDB = await Console.find();
        res.json(consoleDB)
    } catch (e) {
        return res.status(500).json({
            message: 'Error al obtener',
            e
        });
    }
});

module.exports = router