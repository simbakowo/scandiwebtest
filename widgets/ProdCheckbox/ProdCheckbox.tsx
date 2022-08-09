import { Component, Context } from "react";
import styles from './ProdCheckbox.module.css'
import { ProductsContextFC } from './../../providers/products_provider2';
import { ProductsContextType } from './../../@types/prodContext.d';


interface ProdCheckboxProps {
    sku?:string
}
 
interface ProdCheckboxState {
    
}
 
class ProdCheckbox extends Component<ProdCheckboxProps, ProdCheckboxState> {

    static contextType = ProductsContextFC;

    state = { 

    }


    handleOnChange = (event:any)=> {
        //console.log(`${this.props.sku} is now ${event.target.checked}`)

        if(event.target.checked){
            (this.context as ProductsContextType ).addSku(this.props.sku ?? "")
        } else {
            (this.context as ProductsContextType ).removeSku(this.props.sku ?? "")
        }
    }

    render() { 
        
        return ( 
            <div className="delete-checkbox">
                <input type="checkbox" className="delete-checkbox2" onChange={this.handleOnChange}/>
            </div>
        );
    }
}
 
export {ProdCheckbox}