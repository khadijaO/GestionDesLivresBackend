var Sequelize = require("sequelize");
var sequelize = new Sequelize('library', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    dialectModule: require('mysql2'),

});



/*

*LIVRES

*/
const Livre = sequelize.define('livre', {

    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    titre: { type: Sequelize.STRING(100), allowNull: false },
    description: { type: Sequelize.TEXT, allowNull: true },
    prix: { type: Sequelize.FLOAT, allowNull: true },
    couverture: { type: Sequelize.STRING(100), allowNull: true },
    stock: { type: Sequelize.INTEGER, allowNull: true,default:2 },
},
    { tableName: 'livre', timestamps: false, underscored: true }
);

sequelize.sync({ logging: console.log })

/*

*GENRES

*/
const Genre = sequelize.define('genre', {

    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING(100), allowNull: false },

},
    { tableName: 'genre', timestamps: false, underscored: true }
);





/*

*EDITIONS

*/
const Edition = sequelize.define('edition', {

    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    label: { type: Sequelize.STRING(100), allowNull: false },
    date: { type: Sequelize.DATE, allowNull: false },

},
    { tableName: 'edition', timestamps: false, underscored: true }
);
Genre.hasMany(Livre);
Livre.belongsTo(Genre);
Livre.hasMany(Edition);
Edition.belongsTo(Livre);

/*

*USERS

*/
const User = sequelize.define('user', {

    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING(100), allowNull: false },
    email: { type: Sequelize.STRING(100), allowNull: true },
    password: { type: Sequelize.STRING(100), allowNull: true },
    // role: { type: Sequelize.STRING(100), allowNull: true },
},
    { tableName: 'user', timestamps: false, underscored: true }
);


const Role = sequelize.define("role", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING(10),
      allowNull: false
    }
  },
  { tableName: 'role', timestamps: false, underscored: true }

  );


// ******************************************************
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;



Role.belongsToMany(User, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
User.belongsToMany(Role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

ROLES = ["user", "admin", "moderator"];

// module.exports = db;
// ******************************************************


/*
*COMMANDES

*/

Commande=sequelize.define('Commande',{datecmd:Sequelize.DataTypes.DATE})
User.belongsToMany(Livre,{through:Commande});
Livre.belongsToMany(User,{through:Commande});


// sequelize.sync({ logging: console.log })
sequelize.sync().then(() => {
    console.log('Drop and Resync Db');
    initial();
  });


function initial() {
    Role.create({
      
       name: "user"
     });
    
Role.create({
      
       name: "moderator"
     });
    
     Role.create({
     
       name: "admin"
     });
   }

var exports = module.exports = {};
exports.sequelize = sequelize;
exports.Livre = Livre;
exports.Genre = Genre;
exports.Edition = Edition;
exports.User = User;
exports.Commande = Commande;
exports.Role = Role;
exports.ROLES = this.ROLES;