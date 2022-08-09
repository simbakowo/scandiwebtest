import { Component } from "react";
import { ProductsContextType } from "../../@types/prodContext";
import { ProductsContextFC } from "../../providers/products_provider2";
import { BackendServices } from "../../services/BackendServices";
import styles from './MassDeleteButton.module.css'


interface MassDeleteButtonProps {
    
}
 
interface MassDeleteButtonState {
    
}
 
class MassDeleteButton extends Component<MassDeleteButtonProps, MassDeleteButtonState> {
    
    static contextType = ProductsContextFC;
    
    state = { 

    }

    handleOnDelete = () => {
        const skus = (this.context as ProductsContextType ).skus
        BackendServices.deleteProducts(skus ?? [])
        
    }

    render() { 
        return ( 
            <div>
                <button 
                    id="delete-product-btn" 
                    onClick={this.handleOnDelete}
                    className={styles.buttonStyle}>
                    <span>MASS DELETE</span>
                </button>
            </div>
        );
    }
}
 
export {MassDeleteButton}