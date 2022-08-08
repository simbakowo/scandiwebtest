import { Component } from "react";
import { Product } from "../../models/product";
import styles from './ProductTile.module.css'

interface ProductTileProps {
    product: Product
}
 
interface ProductTileState {
    
}

interface attributePostfixMapType {
    [index:string]:string
}


const attributePostfixMap:attributePostfixMapType = {
    "weight":" KG",
    "size":" MB",
    "dimensions":""
}
 
class ProductTile extends Component<ProductTileProps, ProductTileState> {
    state = { 

    }

    render() { 
        const attributeName = this.props.product.attributeName
        const attributeValue = this.props.product.attributeValue
        const postfix = attributePostfixMap[attributeName]
        return ( 
            <div className={styles.productTile}>
                <div className="space-y-2">
                    <span>{this.props.product.sku}</span>
                    <span>{this.props.product.name}</span>
                    <span>{this.props.product.price}</span>
                    <span>{`${attributeName} : ${attributeValue} ${postfix}`}</span>
                </div>
                
            </div>
        );
    }
}
 
export {ProductTile}