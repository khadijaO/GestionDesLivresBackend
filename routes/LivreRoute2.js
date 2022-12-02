
const LivreHandler=require("../models/LivreModel.js");
const LivreController=require("../controllers/LivreController2");
const GenreController=require("../controllers/GenreController");
const EditionController=require("../controllers/EditionController");
const CommandeController=require("../controllers/CommandeController");



const express =require("express");


module.exports = function(app) {
app.get("/h",(req,res,next)=> {
res.send("☘🌿🌵🏵☘☘");

})
app.get("/allLivres",LivreController.getallLivres);
app.get("/getLivre/:id",LivreController.getOneLivre);
app.delete("/deleteLivre/:id",LivreController.deleteLivre);
app.post("/addOneLivre",LivreController.addOneLivre);


/*
* EDITIONS
*/
app.get("/allEditions",EditionController.getallEditions);
app.get("/getEdition/:id",EditionController.getOneEdition);

/*
* GENRES
*/
app.get("/allGenres",GenreController.getallGenres);
app.get("/getGenre/:id",GenreController.getOneGenre);
app.delete("/deleteGenre/:id",GenreController.deleteGenre);
app.post("/addOneGenre",GenreController.addOneGenre);
app.put("/updateOneGenre/:id",GenreController.updateGenre);






/*
*COMMANDES
*/
app.post("/addCommande/:user/:livre",CommandeController.addOneCommande);


}

/*
* LIVRES
*/

//  router.get("/genres",LivreController.getallGenres);

//  router.post("/addLivre",LivreController.addOneLivre);
//  router.delete("/deleteLivre/:id",LivreController.deleteLivre);
//  router.put("/updateLivre/:id",LivreController.updateLivre);
//  router.get("/getLivre/:genre",LivreController.getOneLivre);

 
