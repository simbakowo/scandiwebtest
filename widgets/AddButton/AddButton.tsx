import { NextRouter, withRouter } from "next/router";
import { Component } from "react";
import styles from './AddButton.module.css'
import Router from 'next/router'

interface WithRouterProps {
    router: NextRouter
}

interface AddButtonProps extends WithRouterProps {
    
}
 
interface AddButtonState {
    
}
 
class AddButton extends Component<AddButtonProps, AddButtonState> {
    state = { 

    }

    handleOnAdd = () => {
        Router.push('/addproduct')
    }

    render() { 
        return ( 
            <div>
                <button 
                    onClick={this.handleOnAdd}
                    className={styles.addButtonStyle}>
                    <span>ADD</span>
                </button>

            </div>
        );
    }
}
 
export default withRouter(AddButton)