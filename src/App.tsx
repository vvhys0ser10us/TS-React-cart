import { ProductsProvider } from './context/products_context'
import { CartProvider } from './context/cart_context'
import { Header, Footer, ProductList, Cart } from './components'
import { useState } from 'react'

function App() {
  const [showCart, setShowCart] = useState<Boolean>(false)

  return (
    <ProductsProvider>
      <CartProvider>
        <Header showCart={showCart} setShowCart={setShowCart} />
        {showCart ? <Cart></Cart> : <ProductList></ProductList>}
        <Footer />
      </CartProvider>
    </ProductsProvider>
  )
}

export default App
