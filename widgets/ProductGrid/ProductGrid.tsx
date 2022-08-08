// takes in  a list of product models



import { Component } from "react";
import { Product } from "../../models/product";
import styles from './ProductGrid.module.css'

interface ProductsGridProps {
    products: Product[]
}
 
interface ProductsGridState {
    
}
 
class ProductsGrid extends Component<ProductsGridProps, ProductsGridState> {
    
    state = { 

    }

    render() { 
        return ( 
            <div>
                
            </div>
        );
    }
}
 
export {ProductsGrid}