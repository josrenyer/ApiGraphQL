const axios = require ("axios");
const Character = require('../shemas/character');
const seedersCharacter =require("./characters.json")


const loaderCharacter=async()=>{
	
	let prueba=seedersCharacter.map(e=>Character.find({_id:e._id}, function(err,docs){
		if(err) console.log("este es el error: ", err);
		if(docs.length===0){
			new Character(e).save()
		}
	}))
}

module.exports = {loaderCharacter};