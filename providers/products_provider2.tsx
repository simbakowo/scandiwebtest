// FC: Using functional component

import React, {FC, createContext, PropsWithChildren,  useState} from 'react';
import { ProductsContextType } from '../@types/prodContext';
import { Product } from '../models/product';

export const ProductsContextFC = createContext< ProductsContextType|undefined>(undefined);


const ProductsProviderFC: FC<PropsWithChildren<ProductsContextType>> = ({children}) => {

    const [products, setProducts] = useState<Product[]|undefined>([])
    const [skus, setSkus] = useState<string[]>([])

    const hydrateProducts = (prods?:Product[] | undefined) => {
        setProducts(prods)
    }

    const removeSku = (sku:string) => {
        console.log(`Removing SKU ${sku}`)
        // if in skus, remove
        if(skus.includes(sku)){
            const index = skus.indexOf(sku);
            if (index > -1) {
                skus.splice(index, 1); // 2nd parameter means remove one item only
                setSkus(skus)
            }
            
        }    
        console.log(`All SKUs currently: ${skus}`)
    }

    const addSku = (sku:string) => {
        // if in skus, remove
        console.log(`Adding SKU ${sku}`)
        if(!skus.includes(sku)){
            skus.push(sku)
            setSkus(skus)
        }    
    }



    return ( 
        <ProductsContextFC.Provider value={{ products, skus, hydrateProducts, removeSku, addSku }}>
            {children}
        </ProductsContextFC.Provider>

    );
}
 
export {ProductsProviderFC}
