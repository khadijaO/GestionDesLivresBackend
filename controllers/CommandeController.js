const { Model } = require("sequelize");
const CommandeModel = require("../models/LivreModel");
const LivreController = require("../Controllers/LivreController2");

class CommandeController {
    static async getallCommandeOfUser(req,res) {

        CommandeModel.Commande.findAll({
            where
        }).then(editions=>{
        console.log(editions)
        res.send(editions);
        
        }).catch(function(e){
           console.log(e) });
        
            

 }
 static async getOneEdition(req, res) {
    CommandeModel.Commande.findAll({
        where: {
          id: req.params.id
        }
      }).then(editions=>{
    console.log(editions)
    res.send(editions);
    
    }).catch(function(e){
       console.log(e) });

}
    
    static async deleteEdition(req, res) {
        CommandeModel.Commande.destroy({
        where: {
          id: req.params.id
        }
       
      }).then(result=>{
        if (result == 1) {
          res.send({
            message: " deleted Successfully !!!"
          });
        } else {
          res.send({
            message: `Error while deleting !!!`
          });
        }
       
      }).catch(function(e){
       console.log(e) 
      res.send("cannot delete")});
    }
    static async updateEdition(req, res) {
       
    }
    static async addOneCommande(req, res) {
       
        const Commande = {
            datecmd	: req.body.date,
            userId: req.params.user,
            livreId: req.params.livre,
            
          };


        const stock =LivreController.getLivreInfo(Commande.userId)
        if(stock>0){
            CommandeModel.Commande.create(Commande)
            .then(data => {
              res.send(data);
            })
            .catch(err => {
              res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the book."
              });
            });
        }
          else{
            res.status(500).send("book unavailable ");
          }
        }

}

module.exports = CommandeController