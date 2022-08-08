import { Component } from "react";
import { Product } from "../../models/product";
import styles from './ProductTile.module.css'
import {MyStack} from './../Stack/Stack';
import {ProdCheckbox} from "../ProdCheckbox/ProdCheckbox";

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

                <MyStack>
                    <ProdCheckbox sku={this.props.product.sku}/>

                    <div className={styles.detailsPositioning}>
                        <div>{this.props.product.sku}</div>
                        <div>{this.props.product.name}</div>
                        <div>{`${this.props.product.price} $`}</div>
                        <div>{`${attributeName} : ${attributeValue} ${postfix}`}</div>
                    </div>
                </MyStack>

            </div>
        );
    }
}
 
export {ProductTile}