import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { Product } from "../models/product";
import { BackendServices } from "../services/BackendServices";
import { Appbar } from "../widgets/Appbar/Appbar";


interface HomePageProps {
    
}
 
const HomePage: FunctionComponent<HomePageProps> = () => {

    const [products, setProducts] = useState<(Product | undefined)[]>([]);
    const [isLoading, setLoading] = useState(false)

    const fetchData = useCallback(async () => {

        setLoading(true)
        const products = await BackendServices.getAllProducts();
      
        setProducts(products); //TODO: rather set it Globally?
        setLoading(false)

      }, [])


    // Runs a function on EVERY render of this page..caveats?
    // So when we 'remove' a product, it'll rerender unless you
    // use an empty dependency array
    // Be carefful not to get stuck in a loop here state <-> rerender
    // Could use a custome implementation of a future builder

    // We are using it for 'side-effects' -> getting prods
    // Also using a dependancy array, to prevent rerenders everytime
    // i.e function only runs on first render
    useEffect(() => {
        fetchData().catch(console.error);
    }, [fetchData]);


    return ( 
        <Appbar title="Product List"/>

        // Products grid

    );
}
 
export default HomePage;