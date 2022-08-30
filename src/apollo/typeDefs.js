const {gql} =require("apollo-server-express");

const typeDefs=gql`

	type Query{
		hello: String
		characters(page: Int): Characters!
		character(id:ID!):Character
		episodes(page: Int): Episodes!
		episode(id:ID!):Episode
		locations(page: Int): Locations!
		location(id:ID!):Location
		

	}

	scalar Date

	type Info{
		next:Int
      	pages:Int
      	count:Int
      	prev:Int
	}

	type Character{
		_id:ID!
		name:String
		status:String
		species:String
		type:String
		origin:Location
		location:Location
		episode:[Episode]
		gender:String
		image:String
		created:Date
	}

	type Location{
		_id:ID
		name:String
		type:String
		dimension:String
		residents:[Character]
		created:Date
	}

	type Episode{
		_id:ID
		name: String
		air_date:String
		episode: String
		characters:[Character]
		created:Date
	}

	type Locations{
		info:Info
		results:[Location]
	}

	type Characters{
		info:Info
		results:[Character]
	}

	type Episodes{
		info:Info
		results:[Episode]
	}
	

`

module.exports={typeDefs};