import { validateConfig } from "next/dist/server/config-shared"

interface formValuesMapType {
    [index:string]:any
}

class FormValidation {

    static uploadFormUndefinedValidation(formValues: formValuesMapType){
        let missingValues = [] as unknown as string[]
        let valid = true
        let errMsg = ''
        let missingDimensions = (formValues["height"] == "")||
                                (formValues["width"] == "")||  
                                (formValues["length"] == "")

        let missingSize = (formValues["attributeValue"] == "")

        let missingWeight = (formValues["attributeValue"] == "")

        // sku
        if(formValues["sku"] == ""){
            missingValues.push("SKU")
            valid = false
        }

        // price
        if(formValues["price"] == ""){
            missingValues.push("Price")
            valid = false
        }

        //name
        if(formValues["name"] == ""){
            missingValues.push("Name")
            valid = false
        }

        // attributeName
        if(formValues["sku"] == ""){
            missingValues.push("SKU")
            valid = false
        }

        // attributeValue : if(){}...x3
        if((formValues["attributeName"] == "dimensions")&&missingDimensions){
            errMsg = "One or more of height, width or length is missing"
            missingValues.push("One or more dimensions")
            valid = false
        }

        if((formValues["attributeName"] == "size")&&missingSize){
            errMsg = "Please provide the size"
            missingValues.push("size")
            valid = false
        }

        if((formValues["attributeName"] == "weight")&&missingWeight){
            errMsg = "Please provide the weight"
            missingValues.push("weight")
            valid = false
        }

        if(!valid){
            errMsg = `The following fields are missing: ${missingValues}`
        }

        return {
            errMsg: errMsg,
            valid: valid
        }
    }

    static uploadFormFormatValidation(formValues: formValuesMapType){

        let errMsg = ""
        let valid = true
        let invalidHeight = isNaN(formValues["height"])
        let invalidWidth = isNaN(formValues["width"])
        let invalidLenght = isNaN(formValues["length"])
        let invalidSize = isNaN(formValues["attributeValue"])
        let invalidWeight = isNaN(formValues["attributeValue"])

        // // sku
        // if(formValues["sku"] == ""){
        //     missingValues.push("SKU")
        //     valid = false
        // }

        // price
        if(isNaN(formValues["price"])){
            errMsg = "The price is in an invalid format"
            valid = false
        }

        // //name
        // if(formValues["name"] == ""){
        //     missingValues.push("Name")
        //     valid = false
        // }

        // // attributeName
        // if(formValues["sku"] == ""){
        //     missingValues.push("SKU")
        //     valid = false
        // }

        // attributeValue : if(){}...x3
        if((formValues["attributeName"] == "dimensions")&&invalidHeight){
            errMsg = "The height is in an invalid format"
            valid = false
        }

        if((formValues["attributeName"] == "dimensions")&&invalidLenght){
            errMsg = "The length is in an invalid format"
            valid = false
        }

        if((formValues["attributeName"] == "dimensions")&&invalidWidth){
            errMsg = "The width is in an invalid format"
            valid = false
        }

        if((formValues["attributeName"] == "size")&&invalidSize){
            errMsg = "The size is in an invalid format"
            valid = false
        }

        if((formValues["attributeName"] == "weight")&&invalidWeight){
            errMsg = "The weight is in an invalid format"
            valid = false
        }

        return {
            errMsg: errMsg,
            valid: valid
        }
    }
    
}

export {FormValidation}