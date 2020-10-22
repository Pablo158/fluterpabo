var persona = require("./ModeloPersona"),
  express = require("express"),
  rutas = express.Router();

rutas.post("/obtenerTodos", (request, response) => {
  persona.find({}, (err, datos) => {
    if (err) {
      console.log(err);
      throw err;
    }
    response.status(200).json(datos);
  });
});
rutas.post("/crear", (request, response) => {
  var body = request.body;
  console.log(request.body);
  persona.insertMany(
    {
      nombre: body.nombre,
      apellido: body.apellido,
      edad: body.edad,
      correo: body.correo,
      contrasena: body.contrasena,
    },
    (err, res) => {
      if (err) {
        console.log(err);
        throw err;
      }
      response.status(200).json(res[0]);
    }
  );
});
rutas.post("/login", (request, response) => {
  var body = request.body;
  console.log(request.body);
  persona.findOne(
    { correo: body.correo, constrasena: body.constrasena },
    (err, res) => {
      if (err) {
        console.log(err);
        throw err;
      }
      response.status(200).json(res);
    }
  );
});
module.exports = rutas;
