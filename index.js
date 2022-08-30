const app=require("./src/app.js");
const { ApolloServer } =require('apollo-server-express');
const {typeDefs}=require("./src/apollo/typeDefs")
const {resolvers} =require ("./src/apollo/resolvers")



const start=async()=>{
	const server=new ApolloServer({typeDefs, resolvers})
	await server.start()

	server.applyMiddleware({ app });
	console.log("apollo-server se ejecuta")

	app.listen(process.env.PORT || 3001,()=>{

		console.log("Servidor Arriba")
	})
}


start()




