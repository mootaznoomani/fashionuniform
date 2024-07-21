module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Commande_has_Product', {
    Commande_idCommande: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Commande',
        key: 'idCommande'
      }
    },
    Product_idProduct: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'idProduct'
      }
    }
  }, {
    tableName: 'Commande_has_Product',
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ['Commande_idCommande', 'Product_idProduct'],
        name: 'unique_cmd_prod' // Use a shorter name here
      }
    ]
  });
};
