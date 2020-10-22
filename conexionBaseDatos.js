var mongoose=require('mongoose');
var path = "mongodb+srv://PabloCCCC:Pablo*159@cluster0.t7ov1.mongodb.net/clase?retryWrites=true&w=majority";
var connection=mongoose.connect(path)
mongoose.connection.on('open',(ref)=>{
    console.log("conectado a mongo cloud");

})
