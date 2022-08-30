const axios = require ("axios");
const Episodes = require('../shemas/episode');
const seedersEpisodes =require("./episodes.json")


const loaderEpisodes=async()=>{
	
	seedersEpisodes.map(e=>Episodes.find({_id:e._id}, function(err,docs){
		if(err) console.log("este es el error: ", err);
		if(docs.length===0){
			new Episodes(e).save()
		}
	}))
}

module.exports = {loaderEpisodes};