const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
  }
);
console.log( process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
  });

// Import models
const Product = require('./model/product')(sequelize, DataTypes);
const Admin = require('./model/admin')(sequelize, DataTypes);
const Image = require('./model/image')(sequelize, DataTypes);
const Description = require('./model/description')(sequelize, DataTypes);
const Commande = require('./model/commande')(sequelize, DataTypes);
const CommandeHasProduct = require('./model/commande_has_product')(sequelize, DataTypes);

// Define associations
Product.hasMany(Image, { foreignKey: 'Product_idProduct' });
Image.belongsTo(Product, { foreignKey: 'Product_idProduct' });

Product.hasMany(Description, { foreignKey: 'Product_idProduct' });
Description.belongsTo(Product, { foreignKey: 'Product_idProduct' });

Commande.belongsToMany(Product, { through: CommandeHasProduct, foreignKey: 'Commande_idCommande' });
Product.belongsToMany(Commande, { through: CommandeHasProduct, foreignKey: 'Product_idProduct' });

// Export the db object containing Sequelize and models
const db = {
  sequelize,
  Sequelize,
  Product,
  Admin,
  Image,
  Description,
  Commande,
  CommandeHasProduct,
};

module.exports = db;
