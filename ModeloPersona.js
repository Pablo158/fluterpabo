var mongoose= require("mongoose");
mongoose.Schema=mongoose.Schema;
var atributos=new mongoose.Schema({
    nombre:{type:String,trim:true},
    apellido:{type:String,trim:true},
    edad:{type:Number,trim:true},
    correo:{type:String,trim:true},
    contrasena:{type:String,trim:true}
})
var persona=mongoose.model('persona',atributos);
module.exports=persona
