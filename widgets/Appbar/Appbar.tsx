import { Component, PropsWithChildren } from "react";
import styles from './Appbar.module.css'

interface AppbarProps {
    title:string
    
}
 
interface AppbarState {
    
}
 
class Appbar extends Component<PropsWithChildren<AppbarProps>, AppbarState> {

    state = { 

    }
    render() { 
        return ( 
            <div className={styles.stickyAppbar}>

                {/* title */}
                <span className={styles.title}>
                    {this.props.title}
                </span>


                {/* buttons */}
                <div className={styles.buttonsRow}>
                    {this.props.children}
                </div>

            </div>
        );
    }
}
 
export {Appbar}