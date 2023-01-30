const mongoose = require('mongoose')

module.exports=mongoose.connect("mongodb://127.0.0.1:27017/todo",{
    useUnifiedTopology:true

},(err)=>{
    if(!err){
        console.log('Db connected......')
    }
    else{
        console.log(err)
    }
 
})