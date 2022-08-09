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

        // Descending order
        products?.sort((a, b) => (a.id > b.id) ? -1 : 1)
        
        return products;
    }



    static async deleteProducts(skus:string[]){

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                //"Access-Control-Allow-Origin": "*",
            }
        };

        if(!(skus.length > 0)){
            console.log("No products selected");
            
            return
        }

        let deleteEndpoint = "http://35.173.84.9/api/deleteProducts.php";
        const skusToDelete = {
            "skus":JSON.stringify(skus)
        }
        const result = await axios.post(deleteEndpoint, skusToDelete, axiosConfig)
        console.log(result.data);
    }


    
    static async uploadProduct(product:Product){
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                //"Access-Control-Allow-Origin": "*",
            }
        };

        let deleteEndpoint = "http://35.173.84.9/api/addProduct.php";
        const data = product.toJson()

        console.log(`The data is ${JSON.stringify(data)}`)
    }
    
}

export {BackendServices}