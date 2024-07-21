module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Commande_has_Product', {
    Commande_idCommande: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Commande',
        key: 'idCommande'
      }
    },
    Product_idProduct: {
      type: DataTypes.INTEGER,
      primaryKey: true,
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
        name: 'unique_commande_product'
      }
    ]
  });
};