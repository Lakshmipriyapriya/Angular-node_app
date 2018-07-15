var mongoose=require('mongoose');
module.exports = mongoose.model('task', {
	Title : {type : String, index: true },
	Description:{type: String,index:true},
	Owner:{type:String,index:true},
	Status:{type:String,index:true},                     
	ApplicationId:{type:Number,index:true}

});