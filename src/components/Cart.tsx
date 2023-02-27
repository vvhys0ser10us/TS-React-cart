import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import CartItem from './CartItem'

const Cart = () => {
  const { cart } = useCartContext()

  if (!cart.length)
    return (
      <div style={{ textAlign: 'center', minHeight: '90vh' }}>
        <h1 style={{ margin: '5rem' }}>Your cart is empty.</h1>
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
`

export default Cart
