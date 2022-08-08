import React, {createContext, Component, PropsWithChildren} from 'react';
import { Product } from '../models/product';

export const ProductsContext = createContext< ProductsProps|undefined>(undefined);

interface ProductsProps {
    
};

interface ProductsState {
    // Variables
    products:Product[];

    // Functions
    setProducts: (products:Product[])=>void;
    clearProducts: ()=>void;
    massDelete: (products:Product[])=>void;
};

// class ProductsContextProvider extends Component<ProductsProps, ProductsState> {
class ProductsContextProvider extends Component <PropsWithChildren<ProductsProps>, ProductsState> {


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
    
    // TODO: 
    massDelete = (products:Product[]) => {
        // if(!this.state.products.includes(products) ){
        //     return
        // }
        // const index = this.state.products.indexOf(product);
        // if (index > -1) {
        //     this.state.products.splice(index, 1); // 2nd parameter means remove one item only
        // }
        
        // this.setState({
        //     products : this.state.products 
        // })
        
    }

    
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