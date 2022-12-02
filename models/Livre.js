const connection=require("./db.js");
class Plant{
static async get_all_livres(){
    let query="SELECT * FROM livres";
    return new Promise(resolve=>{
    connection.query(query,[],(err,res)=>{

        if(!err){
            console.log("error: ",err);
            resolve(res);
            return;
        }
        console.log("livres: ",res);
       
    })

        
    })
}

static async get_all_genres(){
    let query="SELECT genre  FROM livres group by genre";
    return new Promise(resolve=>{
    connection.query(query,[],(err,res)=>{

        if(!err){
            console.log("error: ",err);
            resolve(res);
            return;
        }
        console.log("livres: ",res);
       
    })

        
    })
}
static async get_livre_by_id(id){
    let query="SELECT * FROM livres where id=?";
    return new Promise(resolve=>{
    connection.query(query,[id],(err,res)=>{

        if(!err){
            console.log("error: ",err);
            resolve(res);
            return;
        }
        console.log("livres: ",res);
       
    })

        
    })
}
static async get_livre_by_genre(genre){
    let query="SELECT * FROM livres where genre=?";
    return new Promise(resolve=>{
    connection.query(query,[genre],(err,res)=>{

        if(!err){
            console.log("error: ",err);
            resolve(res);
            return;
        }
        console.log("livres: ",res);
       
    })

        
    })
}
static async delete_livre(id){
    let query="delete  FROM livres where id=?";
    return new Promise(resolve=>{
    connection.query(query,[id],(err,res)=>{

        if(!err){
            // console.log("error: ",err);
            resolve(res);
            return;
        }
        console.log("deleted : ",res);
       
    })

        
    })
}
static async update_livre(titre,description,couverture,genre,prix,id){
    let query="update  livre set titre=? ,description=?,prix=? ,couverture=? ,genre=?  where id=?";

    return new Promise(resolve=>{
    connection.query(query,[titre,description,prix,couverture,genre,id],(err,res)=>{

        if(!err){
            // console.log("error: ",err);
            resolve(res);
            return;
        }
        console.log("updated successfully : ",res);
       
    })

        
    })

}
static async add_livre(titre,description,couverture,genre,prix){
    let query="insert into livre (titre,description,prix,couverture,genre) values(?,?,?,?,?)";

    return new Promise(resolve=>{
    connection.query(query,[titre,description,prix,couverture,genre],(err,res)=>{

        if(!err){
            // console.log("error: ",err);
            resolve(res);
            return;
        }
        console.log("added successfully : ",res);
       
    })

        
    })
}
}
module.exports=Plant