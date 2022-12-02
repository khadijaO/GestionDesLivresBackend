const { Model } = require("sequelize");
const UserModel = require("../models/LivreModel");
const op = UserModel.sequelize.Op;
const config = require("../config/auth.config");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

class UserController {
  static async SignUp(req, res) {
    //register a new user
    UserModel.User.create({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8)
    }).then(user => {
      if (req.body.roles) {
        UserModel.Role.findAll({
          where: {
            name: {
              [op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User was registered successfully!" });
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          res.send({ message: "User was registered successfully!" });
        });
      }
    }).catch(err => {
      res.status(500).send({ message: err.message });
    });
  }
  static async SignIn(req, res) {
    UserModel.User.findOne({
      where: {
        name: req.body.name
      }
    })
      .then(user => {
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }

        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );

        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
          });
        }
        var authorities = [];
        user.getRoles().then(roles => {
          for (let i = 0; i < roles.length; i++) {
            authorities.push("ROLE_" + roles[i].name.toUpperCase());
          }
          var token = jwt.sign({ id: user.id, name: user.name, role: authorities }, config.secret, {
            expiresIn: 86400 // 24 hours
          });


          res.status(200).send({
            id: user.id,
            name: user.name,
            email: user.email,
            roles: authorities,
            accessToken: token
          });
        });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  // static async login(req, res) {
  //         const em = req.body.email;
  //         const pwd = req.body.password;

  //         // if (req.session.userId) {
  //         //     res.json({result: 'ERROR', message: 'User already logged in.'});
  //         // }

  //         UserModel.User.findAll({
  //             where: { password: pwd, email: em }
  //         }).then(user => {
  //             if (user.role == "user") {
  //                 res.send({
  //                     message: " this is a user !!!"
  //                 });
  //             } if (user.role == "admin") {
  //                 res.send({
  //                     message: " this an admin !!!"
  //                 });
  //             }
  //             res.send("login successfully!!!"+user.name)

  //             req.session.userId = user.id;
  //         }).catch(function (e) {
  //             console.log(e)
  //         });

  //     }

  // static async login1(req, res) {

  //     if (req.session.userId) {
  //         res.json({result: 'ERROR', message: 'User already logged in.'});

  //     }
  //     else{
  //         UserModel.User.findOne({
  //             where: {
  //               password: req.body.password,
  //               email: req.body.email
  //             }
  //           }).then(users=>{
  //             if (users.role == "user") {
  //                 res.send({
  //                     message: " this is a user !!!"+users.name
  //                 });
  //             } if (users.role == "admin") {
  //                 res.send({
  //                     message: " this an admin !!!"
  //                 });
  //             }

  //         req.session.userId = users.id;

  //         }).catch(function(e){
  //            console.log(e) });

  //     }

  // }
  // static async test(req,res){
  //     if (req.session.userId) {
  //         res.send('site.html');
  //     } else {
  //         res.send('login.html');
  //     }
  // }
  // static async Register(req, res) {

  //     const em = req.body.email;
  //     const pwd = req.body.password;
  //     const pwd2 = req.body.password2;
  //     const rol = req.body.role;
  //     const nam = req.body.name;
  //     if (pwd !== pwd2) {
  //         res.status(500).send(
  //             "something is going wrong with ur new user"
  //         );
  //     } else {

  //         const User = {
  //             name: nam,
  //             email: em,
  //             password: pwd,
  //             role: rol,
  //         }

  //         UserModel.User.create(User).then(data => {

  //                 if (data.role == "user") {
  //                     res.send({
  //                         message: " this is a new  user !!!"
  //                     });
  //                 } if (data.role == "admin") {
  //                     res.send({
  //                         message: " this a new admin !!!"
  //                     });
  //                 }

  //             res.send(data);
  //         })
  //             .catch(err => {
  //                 res.status(500).send({
  //                     message:
  //                         err.message || "Some error occurred while creating the genre."
  //                 });
  //             });
  //     }
  // }
}
module.exports = UserController