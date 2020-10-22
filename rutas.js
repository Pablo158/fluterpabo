const persona = require('./ModeloPersona');

const express=require('express'),
rutas=express.Router(),
equipo=require('./ControladorTerreno');
personas=require('./ControladorPersona')

rutas.use('/equipo',equipo);
rutas.use('/personas',personas);

module.exports=rutas
