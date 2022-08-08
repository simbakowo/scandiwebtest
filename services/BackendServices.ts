import axios from "axios";
import { Product } from "../models/product";


class BackendServices {

    static async getAllProducts():Promise<Product[]|undefined>{
        //const response = await fetch("http://35.173.84.9/api/allProducts.php");

        const result = await axios.get("http://35.173.84.9/api/allProducts.php")
        console.log(result.data)
        //const data = response.json();
        console.log(`Fetched products: ${result.data}`);
        let json_list = result.data;
        //json_list.sort((a, b) => (a.id > b.id) ? 1 : -1)
        const products = Product.productsFromJsonList(json_list)
        products?.sort((a, b) => (a.id > b.id) ? 1 : -1)
        
        return products;
    }


    static async deleteProducts(skus:string[]){

        let deleteEndpoint = "";
    }
    
}

export {BackendServices}