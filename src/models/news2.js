const mongoose=require('mongoose')


const News=mongoose.model('News',{
    title:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    description:{
        type:String,
        trim:true
    },
    author:{
        type:String,
        trim:true,
        required:true
    },
    date:{
        type: String,
       default:new Date(),
       
       
    }
    

})
Date.prototype.addHours = function() {
    this.setTime(this.getTime() + 2);
    return this;
  }



module.exports=News