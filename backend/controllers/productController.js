const ProductModel = require('../models/productModel');

exports.getProducts = async(req, res, next) =>{
     const products   =  await ProductModel.find({});
   res.json({
    success: true,
    products
   })
}
exports.getSigleProducts = async (req, res, next) =>{
   try {
      const product = await ProductModel.findById(req.params.id);
      res.json({
          success: true,
          product
      })
  } catch (error) {
      res.status(404).json({
          success: false,
          message: 'Unable to get Product with that ID'
      })
  }
}