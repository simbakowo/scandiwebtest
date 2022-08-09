import { FunctionComponent, useCallback, useEffect, useState, useContext } from "react";
import { ProductsContextType } from "../@types/prodContext";
import { BackendServices } from "../services/BackendServices";
import AddButton  from "../widgets/AddButton/AddButton";
import { Appbar } from "../widgets/Appbar/Appbar";
import { MassDeleteButton } from "../widgets/MassDeleteButton/MassDeleteButton";
import { ProductsGrid } from "../widgets/ProductGrid/ProductGrid";
import { ProductsContextFC } from './../providers/products_provider2';

interface HomePageProps {
    
}
 
const HomePage: FunctionComponent<HomePageProps> = () => {

    //const [products, setProducts] = useState<(Product | undefined)[]>([]);
    const [isLoading, setLoading] = useState(false)

    const {products, hydrateProducts} = useContext(ProductsContextFC) as ProductsContextType

    const fetchData = useCallback(async () => {

        setLoading(true)
        const _products = await BackendServices.getAllProducts();
      
        hydrateProducts(_products); //TODO: rather set it Globally?
        setLoading(false)

      }, [])

    const reload = () => {
        fetchData()
    }


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


    // or just
    // useEffect(() => {
    //     (async () => {
    //         setLoading(true)
    //         const _products = await BackendServices.getAllProducts();
          
    //         hydrateProducts(_products); //TODO: rather set it Globally?
    //         setLoading(false)
    //     })()
    //   }, [])


    return ( 
        <div>

            {/* // Global Appbar */}
            <Appbar title="Product List">
                <AddButton/>
                <MassDeleteButton/>
            </Appbar>

            {/* // Body */}
            <div className="px-10 py-10">
                {/* // Loading indicator */}
                {isLoading &&
                    <span>Loading widget...</span>
                }

                {/* // Products grid */}
                {!isLoading &&
                    <ProductsGrid products={products}/>
                }
            </div>
        </div>

    );
}
 
export default HomePage;