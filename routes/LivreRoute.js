
const LivreController=require("../controllers/LivreController");
const LivreHandler=require("../models/LivreModel.js");

const express =require("express");
const router =require("express").Router();
router.get("/h",(req,res,next)=> {
LivreHandler.Livre.findAll().then(livres=>{
console.log(livres)
res.send("success ,check ur console");

}).catch(function(e){
console.log("error"+e)
});
 }

)
 router.get("/allLivres",LivreController.getallLivres);
 router.get("/genres",LivreController.getallGenres);

 router.post("/addLivre",LivreController.addOneLivre);
 router.delete("/deleteLivre/:id",LivreController.deleteLivre);
 router.put("/updateLivre/:id",LivreController.updateLivre);
 router.get("/getLivre/:genre",LivreController.getOneLivre);

 
// app.use("/api")
module.exports=router;