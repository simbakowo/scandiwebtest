import { Product } from "../models/product";


class BackendServices {

    static async getAllProducts():Promise<(Product | undefined)[]>{
        const response = await fetch("35.173.84.9/api/allProducts.php");
        const data = response.json();
        console.log(`Fetched products: ${data}`);
        return [];
    }
    
}

export {BackendServices}