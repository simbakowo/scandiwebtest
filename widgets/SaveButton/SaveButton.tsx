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
                <button className={styles.saveButtonStyle}>
                    <span>SAVE</span>
                </button>

            </div>
        );
    }
}
 
export {SaveButton}