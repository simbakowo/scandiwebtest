// takes in  a list of product models



import { Component } from "react";
import { Product } from "../../models/product";
import { ProductTile } from "../ProductTile/ProductTile";
import styles from './ProductGrid.module.css'

interface ProductsGridProps {
    products: Product[] | undefined
}
 
interface ProductsGridState {
    
}
 
class ProductsGrid extends Component<ProductsGridProps, ProductsGridState> {
    
    state = { 

    }

    render() { 
        const _products = this.props.products ?? []
        return ( 
            <div className={styles.productsGrid}>
                {_products.map((prod:Product) => 
                    <ProductTile 
                        key={prod.sku} 
                        product={prod}
                    />
                )}
            </div>
        );
    }
}
 
export {ProductsGrid}