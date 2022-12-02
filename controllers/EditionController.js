const { Model } = require("sequelize");
const EditionModel = require("../models/LivreModel");

class EditionController {
    static async getallEditions(req,res) {

        EditionModel.Edition.findAll({
            
        }).then(editions=>{
        console.log(editions)
        res.send(editions);
        
        }).catch(function(e){
           console.log(e) });
        
            

 }
 static async getOneEdition(req, res) {
    EditionModel.Edition.findAll({
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
      EditionModel.Edition.destroy({
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
    static async addOneEdition(req, res) {
       
    }

}

module.exports = EditionController