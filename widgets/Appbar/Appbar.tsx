import { Component } from "react";
import { AddButton } from "../AddButton/Addbutton";
import { MassDeleteButton } from "../MassDeleteButton/MassDeleteButton";
import styles from './Appbar.module.css'

interface AppbarProps {
    title:string
    
}
 
interface AppbarState {
    
}
 
class Appbar extends Component<AppbarProps, AppbarState> {

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
                    <AddButton/>
                    <MassDeleteButton/>
                </div>

            </div>
        );
    }
}
 
export {Appbar}