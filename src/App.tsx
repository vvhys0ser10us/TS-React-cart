import React from 'react'
import { ProductsProvider } from './context/products_context'

function App() {
  return (
    <ProductsProvider>
      <div>ts + react cart</div>
    </ProductsProvider>
  )
}

export default App
