

import { NextRouter, withRouter } from "next/router";
import { Component } from "react";
import Router from 'next/router'
import { ProductsContextType } from "../../@types/prodContext";
import { ProductsContextFC } from "../../providers/products_provider2";
import { BackendServices } from "../../services/BackendServices";
import styles from './CancelButton.module.css'


interface WithRouterProps {
    router: NextRouter
}

interface CancelButtonProps extends WithRouterProps {
    
}
 
interface CancelButtonState {
    
}
 
class CancelButton extends Component<CancelButtonProps, CancelButtonState> {
    
    static contextType = ProductsContextFC;
    
    state = { 

    }

    handleOnCancel = () => {
        Router.replace('/')
    }

    render() { 
        return ( 
            <div>
                <button 
                    id="delete-product-btn" 
                    onClick={this.handleOnCancel}
                    className={styles.cancelButtonStyle}>
                    <span>CANCEL</span>
                </button>
            </div>
        );
    }
}
 
export default withRouter(CancelButton)