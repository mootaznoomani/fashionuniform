module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Commande', {
      idCommande: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Email: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      Numero: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      Name: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      Lastname: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      Adresse: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      Ville: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      Information: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      Taille: {
        type: DataTypes.STRING(45),
        allowNull: true
      }
    }, {
      tableName: 'Commande',
      timestamps: false
    });
  };
  