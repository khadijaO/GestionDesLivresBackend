const express = require('express')
const cors = require('cors')
const route=require("./routes/LivreRoute2")
const app = express()
require("dotenv").config();
app.use(cors);
const port = 3006
const PORT = process.env.NODE_DOCKER_POST||8080;
const corsOptions ={
  origin:process.env.CLIENT_ORIGIN|| "http://localhost:3000",
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(route);



app.listen(port, () => {
  console.log(`connecté sur le port : ${port}`)
})