require('dotenv').config();
const mongoose = require("mongoose")
const {loaderLocation}=require("./seeders/locations")
const {loaderCharacter}=require("./seeders/characters")
const {loaderEpisodes}=require("./seeders/episodes")

const {MONGODBURI}=process.env;

const conectDB=async()=>{
	try{
		await mongoose.connect(MONGODBURI,{
		useNewUrlParser: true,
    	useUnifiedTopology: true
    	});

		console.log("conectada la DB de MongoDB");
		await loaderLocation()
		await loaderCharacter()
		await loaderEpisodes()

	}catch(err){
		console.log("se producjo el siguiente error: ", err)
	}
}

module.exports=conectDB;