module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Description', {
      idDescription: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Line: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      Product_idProduct: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Product',
          key: 'idProduct'
        }
      }
    }, {
      tableName: 'Description',
      timestamps: false
    });
  };
  