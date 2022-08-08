import { Component } from "react";
import styles from './Mock_widget.module.css'

interface MockWidgetProps {
    
}
 
interface MockWidgetState {
    
}
 
class MockWidget extends Component<MockWidgetProps, MockWidgetState> {
    state = { 

    }

    render() { 
        return ( 
            <div className={styles.mockWidgetBg}>

            </div>
        );
    }
}
 
export {MockWidget}