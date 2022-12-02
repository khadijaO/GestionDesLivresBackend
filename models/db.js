const mysql=require("mysql")
const dbconfig=require("../config/db.config")

// const connection=mysql.createConnection({
// host: dbconfig.HOST,
// user: dbconfig.USER,
// password: dbconfig.password,
// database: dbconfig.DB
// })
// connection.connect(error => {
//     if(error) throw error;
//     console.log("success connection");
// });
// module.exports=connection;