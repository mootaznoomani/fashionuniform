module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Product', {
      idProduct: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Name: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      Price: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      Description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      Tissu: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    }, {
      tableName: 'Product',
      timestamps: false
    });
  };
  