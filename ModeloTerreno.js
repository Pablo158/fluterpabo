var mongoose= require("mongoose");
mongoose.Schema=mongoose.Schema;
var atributos=new mongoose.Schema({
    idLibro:{type:String,trim:true},
    nombre:{type:String,trim:true},
    descripcion:{type:String, trim:true},
    anio:{type:String,trim:true},
    idPersona:{type:String,trim:true}
})
var libro=mongoose.model('libro',atributos);
module.exports=libro;