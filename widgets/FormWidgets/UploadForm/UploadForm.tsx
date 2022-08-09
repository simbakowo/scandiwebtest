import { NextRouter, withRouter } from "next/router";
import { Component } from "react";
import Router from 'next/router'
import { Product } from "../../../models/product";
import { BackendServices } from "../../../services/BackendServices";
import { FormValidation } from "../../../services/FormValidation";
import FormFieldTemplate from "../FormFieldTemplate/FormFieldTemplate";
import styles from './UploadForm.module.css'


interface WithRouterProps {
    router: NextRouter
}

interface UplaodFormProps extends WithRouterProps {
    onAlert:(msg:string, status:string)=>void
}
 
interface UplaodFormState {
    
}

interface statusMapType {
    [index:string]:any
}


class UplaodForm extends Component<UplaodFormProps, UplaodFormState> {

    state = { 
        prodType:'Book',
        loading:false
    }

    handleSubmit = async(e:any) => {

        e.preventDefault()
        //this.setState({loading:true})

        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()))

        const _uploadFormData = Object.fromEntries(data.entries())

        // compute category
        const attributeValueMap:statusMapType = {
            "DVD":`${_uploadFormData.size}`,
            "Book":`${_uploadFormData.weight}`,
            "Furniture":`${_uploadFormData.height}x${_uploadFormData.width}x${_uploadFormData.length}`
        }

        const attributeNameMap:statusMapType = {
            "DVD":"size",
            "Book":"weight",
            "Furniture":"dimensions"
        }

        // validate form
        const sku = _uploadFormData.sku
        const price = _uploadFormData.price
        const name = _uploadFormData.name
        const category = _uploadFormData.switcher
        const attributeValue = attributeValueMap[`${_uploadFormData.switcher}`]
        const attributeName = attributeNameMap[`${_uploadFormData.switcher}`]

        const height = _uploadFormData.height
        const width = _uploadFormData.width
        const lenght = _uploadFormData.lenght
        const size = _uploadFormData.size
        const weight = _uploadFormData.weight

        const formValues = {
            "sku":sku,
            "price":price,
            "name":name,
            "category":category,
            "attributeValue":attributeValue,
            "attributeName":attributeName,
            "height":height,
            "width":width,
            "lenght":lenght,
            "size":size,
            "weight":weight
        }

        if(!FormValidation.uploadFormUndefinedValidation(formValues)["valid"]){
            // show error and return
            console.log("Form no valid, undifend values")
            this.props.onAlert(FormValidation.uploadFormUndefinedValidation(formValues)["errMsg"], "error")
            return
        }

        if(!FormValidation.uploadFormFormatValidation(formValues)["valid"]){
            // show error and return
            console.log("Form no valid, format values")
            this.props.onAlert(FormValidation.uploadFormFormatValidation(formValues)["errMsg"], "error")
            return
        }

        // check if product with SKU already exists
        if(await BackendServices.checkIfSkuExists(sku as string)){
            this.props.onAlert("A product with this SKU already exists", "error")
            return
        }

        // Begin product upload
        const productProps = {
            "id":1, // wont be used
            "sku":sku as string,
            "price":price as string,
            "name":name as string,
            "category":category as string,
            "attributeValue":attributeValue,
            "attributeName":attributeName
        }
        let prod = new Product(productProps)
        if(await BackendServices.uploadProduct(prod)){
            // navigate to home page
            Router.replace('/')
        }




        
    }


    onSelectType = (e:any)=>{
        this.setState({prodType: e.target.value})
    }
    

    render() { 
        return ( 
            <div>

                <form onSubmit={this.handleSubmit} id="product_form" action="">

                    <FormFieldTemplate heading="SKU" name="sku" id="sku"/>
                    <FormFieldTemplate heading="Name" name="name" id="name"/>
                    <FormFieldTemplate type="number" heading="Price" name="price" id="price" step="any"/>

                    <FormFieldTemplate 
                        heading="Type Switcher" name="switcher" id="productType" 
                        isSelect={true} onChange={this.onSelectType} >
                        <option value="Book" id="Book" className={styles.dropdownOptionStyle} >Book</option>
                        <option value="DVD" id="DVD" className={styles.dropdownOptionStyle}>DVD</option>
                        <option value="Furniture" id="Furniture" className={styles.dropdownOptionStyle}>Furniture</option>
                    </FormFieldTemplate>

                    {(this.state.prodType == "Book") &&
                        <div className={styles.typeContainer}>
                            <div className={styles.hintStyle}>Please provide the Book's weight in KGs</div>
                            <FormFieldTemplate type="number" heading="Weight (KG)" name="weight" id="weight" step="any"/>
                        </div>
                    }

                    {(this.state.prodType == "DVD") &&
                        <div className={styles.typeContainer}>
                            <div className={styles.hintStyle}>What is the size of the DVD in MBs?</div>
                            <FormFieldTemplate type="number" heading="Size (MB)" name="size" id="size" step="any"/>
                        </div>
                    }

                    {(this.state.prodType == "Furniture") &&
                        <div className={styles.typeContainer}>
                            <div className={styles.hintStyle}>Please provide the dimensions of this piece of furniture in centimeters</div>
                            <FormFieldTemplate type="number" heading="Height (CM)" name="height" id="height" step="any"/>
                            <FormFieldTemplate type="number" heading="Width (CM)" name="width" id="width" step="any"/>
                            <FormFieldTemplate type="number" heading="Length (CM)" name="length" id="length" step="any"/>
                        </div>
                    }

                </form>

            </div>
        );
    }
}
 
export default withRouter(UplaodForm)