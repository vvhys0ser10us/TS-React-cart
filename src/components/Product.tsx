import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { ProductType } from '../context/products_context'

type PropsType = {
  product: ProductType
}

const Product = ({ product }: PropsType) => {
  const { addToCart } = useCartContext()

  const img: string = new URL(`../assets/${product.sku}.jpg`, import.meta.url)
    .href

  return (
    <Wrapper>
      <h3>{product.name}</h3>
      <img src={img} alt="image" />
      <h4>price: {product.price}</h4>

      <button onClick={() => addToCart(product)}>add to cart</button>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 2rem;
  margin: 2rem;

  img {
    display: block;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 1rem;
  }

  h3,
  h4 {
    text-transform: capitalize;
  }

  button {
    border: transparent;
    background: #333;
    color: #fff;
    padding: 0.5rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.5s linear;
    &:hover {
      background: #777;
    }
  }
`

export default Product
