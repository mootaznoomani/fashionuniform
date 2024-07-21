module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Image', {
      idImage: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Url: {
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
      tableName: 'Image',
      timestamps: false
    });
  };
  