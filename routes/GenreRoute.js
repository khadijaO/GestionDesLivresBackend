const LivreHandler=require("../models/LivreModel.js");
const GenreController=require("../controllers/GenreController");

const express =require("express");
const router =require("express").Router();
router.get("/h",(req,res,next)=> {
res.send("βπΏπ΅π΅ββ Genre");

})
router.get("/allGenres",GenreController.getallGenres);
router.get("/getGenre/:id",GenreController.getOneGenre);