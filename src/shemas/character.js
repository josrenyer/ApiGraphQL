const {Schema, model}=require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
const {ObjectId}=Schema;


const characterSchema=new Schema({
	_id:{
		type:String,
		required:true
	},
	name:{
		type:String,
		required:true
	},
	status:{
		type:String,
		required:true
	},
	species:{
		type:String,
		required:true
	},
	type:{
		type:String
	},
	gender:{
		type:String,
		required:true
	},
	origin:{
		type:ObjectId,
		ref:'Location'
	},
	location:{
		type:ObjectId,
		ref:'Location'
	},
	image:{
		type:String,
		required:true
	},
	episode:[{
		type:ObjectId,
		ref:'Episodes',
		required:true
	}],
	created:{
		type:String,
		required:true
	}
},{
   timestamps: false
})

characterSchema.plugin(mongoosePaginate);

module.exports=model("Character", characterSchema)