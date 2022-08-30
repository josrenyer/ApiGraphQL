const Character = require('../shemas/character');
const Episodes = require('../shemas/episode');
const Location= require('../shemas/location');

const resolvers={
	
	Query:{
		hello:()=>"hello word",

		async characters(root, args){
			const options={
				page: args.page,
  				limit: 20,
			}
			return await Character.paginate({},options,(err, res)=>{
				try{
					console.log(res)
					let {docs, totalDocs, totalPages, nextPage, prevPage,}=res;

					let obj={
						info:{
							next:nextPage,
      						pages:totalPages,
      						count:totalDocs,
      						prev:prevPage
						},
						results:docs
					}
					return obj

				}catch(err){
					console.log(err)
				}
			})
		},
		async character(root, args){
			console.log(args)
			let chat= await Character.find({_id:args.id}).populate("origin").populate("location").populate("episode")
			return chat[0]
		},

		async episodes(root, args){
			const options={
				page: args.page,
  				limit: 20,
			}
			return await Episodes.paginate({},options,(err, res)=>{
				try{
					let {docs, totalDocs, totalPages, nextPage, prevPage,}=res;

					let obj={
						info:{
							next:nextPage,
      						pages:totalPages,
      						count:totalDocs,
      						prev:prevPage
						},
						results:docs
					}
					return obj

				}catch(err){
					console.log(err)
				}
			})
		},

		async episode(root, args){
			console.log(args)
			let epi=await Episodes.find({_id:args.id}).populate("characters")
			console.log(epi[0])
			return epi[0]
		},

		async locations(root, args){
			const options={
				page: args.page,
  				limit: 20,
			}
			return await Location.paginate({},options,(err, res)=>{
				try{
					let {docs, totalDocs, totalPages, nextPage, prevPage,}=res;

					let obj={
						info:{
							next:nextPage,
      						pages:totalPages,
      						count:totalDocs,
      						prev:prevPage
						},
						results:docs
					}
					return obj

				}catch(err){
					console.log(err)
				}
			})
		},

		async location(root, args){
			console.log(args)
			let loc=await Location.find({_id:args.id}).populate("residents")
			return loc[0]
		},
	}
}


module.exports={resolvers};