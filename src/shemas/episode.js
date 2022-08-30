const {Schema, model}=require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
const {ObjectId}=Schema;

const episodeSchema=new Schema({
	_id:{
		type:String,
		required:true
	},
	name:{
		type:String,
		required:true
	},
	air_date:{
		type:String,
		required:true
	},
	episode:{
		type:String,
		required:true
	},
	characters:[{
		type:ObjectId,
		ref:'Character',
		required:true
	}],
	created:{
		type:String,
		required:true
	}
},{
   timestamps: false
})

episodeSchema.plugin(mongoosePaginate);

module.exports=model("Episodes", episodeSchema)