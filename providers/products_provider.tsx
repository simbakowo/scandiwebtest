import React, {createContext, Component} from 'react';
import { Product } from '../models/product';

export const ProductsContext = createContext< ProductsProps|undefined>(undefined);

interface ProductsProps {
    
};

interface ProductsState {
    // Variables
    products:Product[];

    // Functions
    setProducts: ()=>void;
    clearProducts: ()=>void;
    massDelete: (product:Product)=>void;
};

class ProductsContextProvider extends Component<ProductsProps, ProductsState> {



    setProducts = (products:Product[]) => {
        this.setState({
            products : products
        })
        
    }
       
    clearProducts = () => {
        this.setState({
            products : []
        })
        
    }
    
    massDelete = (product:Product) => {
        if(!this.state.products.includes(product) ){
            return
        }
        const index = this.state.products.indexOf(product);
        if (index > -1) {
            this.state.products.splice(index, 1); // 2nd parameter means remove one item only
        }
        
        this.setState({
            products : this.state.products 
        })
        
    }

    

    



    // Define state here
    state = { 

        // Variables
        products: [] as unknown as Product[], 
        

        // Functions
        setProducts: this.setProducts,
        clearProducts: this.clearProducts,
        massDelete: this.massDelete
    }
    
    
    render() { 
        return (
            <ProductsContext.Provider value={{...this.state }}>
                {this.props.children}
            </ProductsContext.Provider>
        );
    }
}


export { ProductsContextProvider }