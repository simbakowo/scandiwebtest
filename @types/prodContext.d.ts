import { Product } from "../models/product";


export interface ProductsContextType {
    //children?: ReactNode
    products?:Product[]
    skus?:string[]
    hydrateProducts:(products?:Product[] | undefined)=>void;
    addSku:(sku:string)=>void;
    removeSku:(sku:string)=>void
    
}