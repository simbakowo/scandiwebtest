import { Component } from "react";
import styles from './AddButton.module.css'

interface AddButtonProps {
    
}
 
interface AddButtonState {
    
}
 
class AddButton extends Component<AddButtonProps, AddButtonState> {
    state = { 

    }

    render() { 
        return ( 
            <div>
                <button className={styles.addButtonStyle}>
                    <span>ADD</span>
                </button>

            </div>
        );
    }
}
 
export {AddButton}