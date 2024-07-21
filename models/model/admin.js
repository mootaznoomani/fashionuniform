module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Admin', {
      idAdmin: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Email: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      Password: {
        type: DataTypes.STRING(45),
        allowNull: true
      }
    }, {
      tableName: 'Admin',
      timestamps: false
    });
  };
  