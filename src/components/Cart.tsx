import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import CartItem from './CartItem'

const Cart = () => {
  const { cart, checkout } = useCartContext()

  if (!cart.length)
    return (
      <div
        style={{ textAlign: 'center', minHeight: 'calc(100vh - 100px - 5rem)' }}
      >
        <h1 style={{ padding: '5rem' }}>Your cart is empty.</h1>
      </div>
    )

  return (
    <Wrapper>
      <section>
        <div className="items">
          {cart.map((item, index) => {
            return <CartItem key={index} item={item}></CartItem>
          })}
        </div>
      </section>
      <button className="checkout" onClick={() => checkout()}>
        check out
      </button>
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

  .checkout {
    display: block;
    width: 10rem;
    margin: 2rem auto;
    border: transparent;
    background: #333;
    color: #fff;
    padding: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.5s linear;
    &:hover {
      background: #777;
    }
  }
`

export default Cart
