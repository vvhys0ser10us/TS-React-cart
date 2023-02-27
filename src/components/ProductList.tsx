import Product from './Product'
import styled from 'styled-components'
import { useProductsConext } from '../context/products_context'

const ProductList = () => {
  const { products } = useProductsConext()

  if (!products?.length)
    return (
      <div style={{ textAlign: 'center', minHeight: '90vh' }}>
        <h1 style={{ margin: '5rem' }}>Loading...</h1>
      </div>
    )

  return (
    <Wrapper>
      <section>
        <div className="products">
          {products.map((product, index) => {
            return <Product product={product} key={index}></Product>
          })}
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  min-height: calc(100vh - 100px - 5rem);

  section {
    width: 90%;
    max-width: 1250px;
    margin: 0 auto;
  }

  @media (min-width: 900px) {
    .products {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
      justify-content: center;
    }
  }
`

export default ProductList
