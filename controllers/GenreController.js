const { Model } = require("sequelize");
const GenreModel = require("../models/LivreModel");

class GenreController {
    static async getallGenres(req,res) {

        GenreModel.Genre.findAll({
            
        }).then(genres=>{
        console.log(genres)
        res.send(genres);
        
        }).catch(function(e){
           console.log(e) });
        
            

 }
 static async getOneGenre(req, res) {
    GenreModel.Genre.findAll({
        where: {
          id: req.params.id
        }
      }).then(genres=>{
    console.log(genres)
    res.send(genres);
    
    }).catch(function(e){
       console.log(e) });

}
    
    static async deleteGenre(req, res) {
      GenreModel.Genre.destroy({
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
    static async updateGenre(req, res) {
      const id = req.params.id;

      GenreModel.Genre.update(req.body, {
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


    static async addOneGenre(req, res) {
      const genre = {
        name: req.body.name,
        
      };
    
      GenreModel.Genre.findOrCreate({
        where: { name: req.body.name },
      }).then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the genre."
          });
        });
    }

}

module.exports = GenreController