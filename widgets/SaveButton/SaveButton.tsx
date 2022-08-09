import { Component } from "react";
import styles from './SaveButton.module.css'

interface SaveButtonProps {
    
}
 
interface SaveButtonState {
    
}
 
class SaveButton extends Component<SaveButtonProps, SaveButtonState> {
    state = { 

    }

    render() { 
        return ( 
            <div>
                <button form="product_form" className={styles.saveButtonStyle}>
                    <span>Save</span>
                </button>

            </div>
        );
    }
}
 
export {SaveButton}