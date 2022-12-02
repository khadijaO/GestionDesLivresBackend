const LivreHandler=require("../models/LivreModel.js");
const EditionController=require("../controllers/EditionController");

const express =require("express");
const router =require("express").Router();
router.get("/h",(req,res,next)=> {
res.send("☘🌿🌵🏵☘☘ Edition");

})
router.get("/allEditions",EditionController.getallEditions);
router.get("/getEdition/:id",EditionController.getOneEdition);