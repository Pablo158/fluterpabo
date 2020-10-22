var http=require("http");
var server = http.createServer();
const express = require('express');
const body_parser = require('body-parser');
const app=express();
var connection=require('./conexionBaseDatos');
const { compileFunction } = require("vm");
const rutas=require('./rutas')
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));
app.use('/',rutas);

function mensaje(peticion,respuesta){
    respuesta.writeHead(200,{'content-type':'text/plain'})
    respuesta.write("Hola Mundo")
    respuesta.end();
}
var port = process.env.PORT || 2012
app.on('request',mensaje);
app.listen(port,function(){
    console.log("El servidor se inicio correctamente")
});
