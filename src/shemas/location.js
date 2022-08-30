const {Schema, model}=require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
const {ObjectId}=Schema;

const locationSchema=new Schema({
	_id:{
		type:String,
		required:true
	},
	name:{
		type:String,
		required:true
	},
	type:{
		type:String,
		required:true
	},
	dimension:{
		type:String,
		required:true
	},
	residents:[{
		type:ObjectId,
		ref:'Character',
		required:true,
	}],
	created:{
		type:Date,
		required:true
	}
},{
   timestamps: false
})

locationSchema.plugin(mongoosePaginate);

module.exports=model("Location", locationSchema);