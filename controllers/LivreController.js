const livreModel = require("../models/Livre.js");
class LivreController {
    static async getallLivres(req, res) {

        var results = await livreModel.get_all_livres();
        if (results) {
            res.setHeader("Access-Control-Allow-Origin", "*")
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.setHeader("Access-Control-Max-Age", "1800");
            res.setHeader("Access-Control-Allow-Headers", "content-type");
            res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
            res.send(results);
            console.log(results)
            // return res.json(results)
        }
        else {
            res.status(500).send({
                message: "error"
            });
        }
    }


    static async getallGenres(req, res) {

        var results = await livreModel.get_all_genres();
        if (results) {
            res.setHeader("Access-Control-Allow-Origin", "*")
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.setHeader("Access-Control-Max-Age", "1800");
            res.setHeader("Access-Control-Allow-Headers", "content-type");
            res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
            res.send(results);
            console.log(results)
            // return res.json(results)
        }
        else {
            res.status(500).send({
                message: "error"
            });
        }
    }
    static async getOneLivre(req, res) {
        const genre = req.params.id;
        var results = await livreModel.get_livre_by_genre(genre);
        if (results) {
            res.send(results);
        }
        else {
            res.status(500).send({
                message: "error"
            });
        }
    }

    static async deleteLivre(req, res) {
        const livreId = req.params.id;
        var results = await livreModel.delete_livre(livreId);
        if (results) {
            res.send(results);
        }
        else {
            res.status(500).send({
                message: "error"
            });
        }
    }
    static async updateLivre(req, res) {
        var results = await livreModel.update_livre();
        if (results) {
            res.send(results);
        }
        else {
            res.status(500).send({
                message: "error"
            });
        }
    }
    static async addOneLivre(req, res) {
        var results = await livreModel.add_livre();
        if (results) {
            res.setHeader("Access-Control-Allow-Origin", "*")
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.setHeader("Access-Control-Max-Age", "1800");
            res.setHeader("Access-Control-Allow-Headers", "content-type");
            res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
            res.send(results);
        }
        else {
            res.status(500).send({
                message: "error"
            });
        }
    }

}

module.exports = LivreController