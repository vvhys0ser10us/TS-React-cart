import { ProductsProvider } from './context/products_context'
import { CartProvider } from './context/cart_context'

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <div>ts + react cart</div>
      </CartProvider>
    </ProductsProvider>
  )
}

export default App
