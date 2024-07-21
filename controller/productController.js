const { Product, Image, Description } = require('../models');

const createProduct = async (req, res) => {
  const { Name, Price, Description: desc, Tissu, images, descriptions } = req.body;

  try {
    // Create Product
    const product = await Product.create({
      Name,
      Price,
      Description: desc,
      Tissu
    });

    // Add Images
    if (images && images.length > 0) {
      await Promise.all(images.map(image => 
        Image.create({ Url: image, Product_idProduct: product.idProduct })
      ));
    }

    // Add Descriptions
    if (descriptions && descriptions.length > 0) {
      await Promise.all(descriptions.map(line => 
        Description.create({ Line: line, Product_idProduct: product.idProduct })
      ));
    }

    res.status(201).json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const getAllProducts = async (req, res) => {
    try {
      const products = await Product.findAll({
        include: [
          { model: Image, attributes: ['Url'] },
        ]
      });
      res.json(products);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  const getProductById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const product = await Product.findByPk(id, {
        include: [
          { model: Image, attributes: ['Url'] },
          { model: Description, attributes: ['Line'] }
        ]
      });
  
      if (!product) {
        return res.status(404).send('Product not found');
      }
  
      res.json(product);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

module.exports = {
  createProduct,
  getAllProducts,
  getProductById
};
