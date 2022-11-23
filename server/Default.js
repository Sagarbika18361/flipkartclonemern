import {products} from "./constant/data.js"
import { Product } from "./model/productSchema.js";

export const DefaultData = async() =>{
    try{

    //    await Product.deleteMany({})
       await Product.insertMany(products)
        console.log("Data is imported successfully")
    }catch(error){
        console.log(`Error while inserting default data` , error.message);
    }
}

