const express = require("express");
const cors = require("cors");
// const route=require("./routes/LivreRoute2")
const app = express();


/*
** Session 
*/

/*
** Session 
*/
var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// routes

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/LivreRoute2')(app);

// app.use(route);
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome "});
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});