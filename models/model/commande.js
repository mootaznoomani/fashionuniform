// Commande model definition
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Commande', {
    idCommande: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Email: DataTypes.STRING,
    Numero: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    Lastname: DataTypes.STRING,
    Adresse: DataTypes.TEXT,
    Ville: DataTypes.STRING,
    Information: DataTypes.TEXT,
    Taille: DataTypes.STRING,
    Products: { // Store products as JSON
      type: DataTypes.JSON
    }
  }, {
    tableName: 'Commande',
    timestamps: false
  });
};
