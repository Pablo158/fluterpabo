var terreno = require("./ModeloTerreno"),
  express = require("express"),
  rutas = express.Router();

rutas.post("/obtenerTodos", (request, response) => {
  var body = request.body;
  console.log(body);
  terreno.find({ idPersona: body.idPersona }, (err, datos) => {
    if (err) {
      console.log(err);
      throw err;
    }
    if(datos.length > 0){
      response.status(200).json(datos);
    }
    else{
      response.status(200).json([{data:0}]);
    }
  });
});

rutas.post("/crear", (request, response) => {
  var body = request.body;
  terreno.insertMany(
    {
      idPersona: body.idPersona,
      dimension: body.dimension,
      barrio: body.barrio,
      calleprincipal: body.calleprincipal,
    },
    (err, resp) => {
      if (err) {
        console.log(err);
        throw err;
      }
      response.status(200).json({ mensaje: "Guardado Correctamente", data: 1 });
    }
  );
});
rutas.post("/editar", (request, response) => {
  var body = request.body;
  console.log(body);
  terreno.updateOne(
    {
      _id: body._id,
    },
    {
      $set:{
        dimension: body.dimension,
        barrio: body.barrio,
        calleprincipal: body.calleprincipal,
      }
    },
    (err, res) => {
      if (err) {
        console.log(err);
        throw err;
      }
      response.status(200).json({ mensaje: "Modificado Correctamente", data: 1 });
    }
  );
});
rutas.post("/eliminar", (request, response) => {
  var body = request.body;
  terreno.deleteOne(
    {
      _id: body._id,
    },
    (err, res) => {
      if (err) {
        console.log(err);
        throw err;
      }
      response.status(200).json({ mensaje: "Eliminado Correctamente", data: 1 });
    }
  );
});
module.exports = rutas;
