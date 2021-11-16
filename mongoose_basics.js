require('dotenv').config()
const mongoose = require('mongoose');


const url = 'mongodb+srv://' + process.env.USER +':' + process.env.PASS +'@cluster0.vgg3n.mongodb.net/e-comm';
mongoose.connect(url);

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});

const saveInDB = async () => {
    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = new ProductsModel({ name: "M 301", brand: "Micromax", price: 299 });
    let result = await data.save();
    console.log(result);
}

const updateInDB = async () => {
    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = await ProductsModel.updateOne(
        { name: 'nokia 202'},
        {
            $set: { price: 16 } 
        }
    )
    console.log(data);
    
}

const deleteInDB = async () => {
    const ProductModel = mongoose.model('products', ProductSchema);
    let data = await ProductModel.deleteOne({ name: "M 301" });
    console.log(data);
}

const findInDB = async () => {
    const ProductModel = mongoose.model('products', ProductSchema);
    let data = await ProductModel.find({ name: 'M 1011' });
    console.log(data);
    console.log(data.length);
}

findInDB();