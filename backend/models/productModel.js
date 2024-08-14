
const mongoose = require('mongoose');

//create schema class

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    description:String,
    ratings: String,
    image: [{
        image:String
    }],
    category: String,
    seller : String,
    stock: String,
    nomberofReviews:String,
    createdAt: Date
});


const productModel = mongoose.model('Product', productSchema);



exports.model = productModel;