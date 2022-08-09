
export interface ProductParameters {
    id:number,
    sku:string | undefined,
    price:string, //ns
    name:string, //ns
    category:string, //ns
    attributeName:string, //ns
    attributeValue:string, 
}

interface jsonType {
    [index:string]:any
}

class Product {

    id;
    sku;
    price;
    name;
    category;
    attributeName;
    attributeValue;

    constructor(properties:ProductParameters) {

        // If you wante named parameters, you're gonna  have to 
        // pass all the properties in an object as the argument
        this.id = properties.id;
        this.sku = properties.sku;
        this.price = properties.price;
        this.name = properties.name;
        this.category = properties.category;
        this.attributeName = properties.attributeName;
        this.attributeValue = properties.attributeValue;

        
    }

    // or use the 'object' type
    static productsFromJsonList(data:any):Product[]|undefined{
        return data.map((doc:jsonType)=>
            new Product(
                {
                    id:doc.id,
                    sku:doc.sku,
                    price:doc.price,
                    name:doc.name,
                    category:doc.category,
                    attributeName:doc.attributeName,
                    attributeValue:doc.attributeValue

                }
            )
        )
    }

    static productsToJsonList(products:Product[]){
        let productsList:object[] = [] as unknown as object[]
        let total:number = 0
        let index:number
        for(index=0; index < products.length; index++ ){
            productsList.push(
                {
                    "sku" : products[index].sku,
                    "price" : Number(products[index].price),
                    "name" : products[index].name,
                    "category": products[index].category,
                    "attributeName": products[index].attributeName,
                    "attributeValue": products[index].attributeValue,
                    
                }
            )
        }
        return productsList
    }

    toJson(){
        return {
            
                "sku" : this.sku,
                "price" : Number(this.price),
                "name" : this.name,
                "category": this.category,
                "attributeName": this.attributeName,
                "attributeValue": this.attributeValue,
                
        }
    }

}

export { Product }