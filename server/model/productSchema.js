import mongoose from "mongoose";


export const productSchema = new mongoose.Schema({
    id: {
        type:String,
        required:true,
        unique:true,
    },
        url: String,
        detailUrl: String,
        title: Object, 
        price: Object,
        quantity: Number,
        description: String,
        discount: String, 
        tagline: String, 
})

export const Product = mongoose.model("product",productSchema)