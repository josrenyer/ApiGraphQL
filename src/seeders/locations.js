const mongoose = require("mongoose")
const Location= require('../shemas/location');
const seedersLocation=require("./locations.json")




const loaderLocation=async()=>{


	let pruebamodelo=seedersLocation.map(e=>Location.find({_id:e._id}, function(err,docs){
		if(docs.length===0){
			new Location(e).save()
			console.log("se creo un nuevo documento")
		}
	}))	
}

module.exports = {loaderLocation};