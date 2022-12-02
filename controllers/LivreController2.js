const { Model } = require("sequelize");
const livreModel = require("../models/LivreModel");
class LivreController2 {
    static async getallLivres(req,res) {

        livreModel.Livre.findAll({
            include:[{model:livreModel.Genre}]
        }).then(livres=>{
        console.log(livres)
        res.send(livres);
        
        }).catch(function(e){
           console.log(e) });
        
            

 }
   
    static async getOneLivre(req, res) {
        livreModel.Livre.findAll({
            where: {
              id: req.params.id
            }
          }).then(livres=>{
        console.log(livres)
        res.send(livres);
        
        }).catch(function(e){
           console.log(e) });

    }
    static async getLivreInfo(id) {
      livreModel.Livre.findOne({
          where: {
            id: id
          }
        }).then(livres=>{
      return livres.stock
      
      }).catch(function(e){
         console.log(e) });

  }

    static async deleteLivre(req, res) {
    
      livreModel.Livre.destroy({
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
    static async updateLivre(req, res) {
      const id = req.params.id;

      livreModel.Livre.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: " Updated Successfully !!!"
            });
          } else {
            res.send({
              message: `Error while updating !!!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error"
          });
        });
    }
    static async addOneLivre(req, res) {
 
      const livre = {
        titre: req.body.title,
        description: req.body.description,
        prix: req.body.prix,
        couverture: req.body.couverture,
        genre_id:req.body.genre_id,
        stock:req.body.stock
      };
    
      livreModel.Livre.create(livre)
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
    

}

module.exports = LivreController2