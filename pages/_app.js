import '../styles/globals.css'
import { ProductsContextProvider } from './../providers/products_provider';
import { ProductsProviderFC } from './../providers/products_provider2';
import { AlertProvider } from './../providers/alert_provider';

function MyApp({ Component, pageProps }) {
  return (
    <AlertProvider>
      <ProductsContextProvider>
        <ProductsProviderFC>
          <Component {...pageProps} />
        </ProductsProviderFC>
      </ProductsContextProvider>
    </AlertProvider>
    
    
  )
}

export default MyApp
