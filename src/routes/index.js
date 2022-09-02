const { Router } = require('express');


const router=Router()


router.get("/",(req,res)=>{
	res.send({Data: "Hola bienbenidos a mi API-GraphQL para poder entrar en necesario que añadan /graphql al final de la url. Gracias" })
})




module.exports=router;