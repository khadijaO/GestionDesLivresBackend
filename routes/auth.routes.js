const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/UserController");
module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
   app.get("/h",(req,res,next)=> {
      res.send("hi");
      
      })
    app.post(
      "/api/auth/signup",
      [
        verifySignUp.checkDuplicateUsernameOrEmail,
        verifySignUp.checkRolesExisted
      ],
      controller.SignUp
    );
  
    app.post("/api/auth/signin", controller.SignIn);
  };