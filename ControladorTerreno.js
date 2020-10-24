var libro = require("./ModeloTerreno"),
  express = require("express"),
  rutas = express.Router();

rutas.post("/obtenerTodos", (request, response) => {
  var body = request.body;
  console.log(body);
  libro.find({ idPersona: body.idPersona }, (err, datos) => {
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
  libro.insertMany(
    {
      idPersona: body.idPersona,
      nombre: body.nombre,
      descripcion: body.descripcion,
      anio: body.anio,
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
  libro.updateOne(
    {
      _id: body._id,
    },
    {
      $set:{
        nombre: body.nombre,
        descripcion: body.descripcion,
        anio: body.anio,
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
  libro.deleteOne(
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
