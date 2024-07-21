const { Commande, Product, Commande_has_Product } = require('../models');

const createCommande = async (req, res) => {
  const { Email, Numero, Name, Lastname, Adresse, Ville, Information, Taille, products } = req.body;

  try {
    // Create Commande
    const commande = await Commande.create({
      Email,
      Numero,
      Name,
      Lastname,
      Adresse,
      Ville,
      Information,
      Taille
    });

    // Link Products
    if (products && products.length > 0) {
      await Promise.all(products.map(productId =>
        Commande_has_Product.create({
          Commande_idCommande: commande.idCommande,
          Product_idProduct: productId
        })
      ));
    }

    res.status(201).json(commande);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  createCommande
};
