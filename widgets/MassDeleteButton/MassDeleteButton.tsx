import { Component } from "react";
import styles from './MassDeleteButton.module.css'


interface MassDeleteButtonProps {
    
}
 
interface MassDeleteButtonState {
    
}
 
class MassDeleteButton extends Component<MassDeleteButtonProps, MassDeleteButtonState> {
    state = { 

    }

    render() { 
        return ( 
            <div>
                <button id="delete-product-btn" className={styles.buttonStyle}>
                    <span>MASS DELETE</span>
                </button>
            </div>
        );
    }
}
 
export {MassDeleteButton}