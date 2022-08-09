import { Component } from "react";
import FormFieldTemplate from "../FormFieldTemplate/FormFieldTemplate";


interface UplaodFormProps {
    
}
 
interface UplaodFormState {
    
}
 
class UplaodForm extends Component<UplaodFormProps, UplaodFormState> {

    state = { 
        prodType:''
    }

    handleSubmit = async(e:any) => {

    }

    onSelectType = (e:any)=>{
        this.setState({prodType: e.target.value})
    }
    
    render() { 
        return ( 
            <div>

                <form onSubmit={this.handleSubmit} action="">

                    <FormFieldTemplate heading="SKU" name="sku" id="#sku"/>
                    <FormFieldTemplate heading="Name" name="name" id="#name"/>
                    <FormFieldTemplate type="number" heading="Price" name="price" id="#price"/>

                    <FormFieldTemplate 
                        heading="Type Switcher" name="switcher" id="#productType" 
                        isSelect={true} onChange={this.onSelectType} >
                        <option value="Book" id="Book" >Book</option>
                        <option value="DVD" id="DVD">DVD</option>
                        <option value="Furniture" id="Furniture">Furniture</option>
                    </FormFieldTemplate>

                    {(this.state.prodType == "Book") &&
                        
                        <FormFieldTemplate type="number" heading="Weight (KG)" name="weight" id="#weight"/>
                    }

                </form>

            </div>
        );
    }
}
 
export {UplaodForm}