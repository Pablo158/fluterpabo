var mongoose= require("mongoose");
mongoose.Schema=mongoose.Schema;
var atributos=new mongoose.Schema({
    idPersona:{type:String,trim:true},
    dimension:{type:String,trim:true},
    barrio:{type:String, trim:true},
    calleprincipal:{type:String,trim:true}
})
var terreno=mongoose.model('terreno',atributos);
module.exports=terreno;