import '../styles/globals.css'
import { ProductsContextProvider } from './../providers/products_provider';
import { ProductsProviderFC } from './../providers/products_provider2';

function MyApp({ Component, pageProps }) {
  return (
    <ProductsContextProvider>
      <ProductsProviderFC>
        <Component {...pageProps} />
      </ProductsProviderFC>
    </ProductsContextProvider>
    
  )
}

export default MyApp
