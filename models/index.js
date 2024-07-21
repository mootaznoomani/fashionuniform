const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('amine', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

const Product = require('./model/product')(sequelize, DataTypes);
const Admin = require('./model/admin')(sequelize, DataTypes);
const Image = require('./model/image')(sequelize, DataTypes);
const Description = require('./model/description')(sequelize, DataTypes);
const Commande = require('./model/commande')(sequelize, DataTypes);
const Commande_has_Product = require('./model/commande_has_product')(sequelize, DataTypes);

// Define associations
Product.hasMany(Image, { foreignKey: 'Product_idProduct' });
Image.belongsTo(Product, { foreignKey: 'Product_idProduct' });

Product.hasMany(Description, { foreignKey: 'Product_idProduct' });
Description.belongsTo(Product, { foreignKey: 'Product_idProduct' });

Commande.belongsToMany(Product, { through: Commande_has_Product, foreignKey: 'Commande_idCommande' });
Product.belongsToMany(Commande, { through: Commande_has_Product, foreignKey: 'Product_idProduct' });

const db = {
  sequelize,
  Sequelize,
  Product,
  Admin,
  Image,
  Description,
  Commande,
  Commande_has_Product
};

module.exports = db;
