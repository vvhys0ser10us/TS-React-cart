import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'

type HeaderPropsType = {
  showCart: Boolean
  setShowCart: React.Dispatch<React.SetStateAction<Boolean>>
}

const Header = ({ showCart, setShowCart }: HeaderPropsType) => {
  const { totalItems, totalPrice } = useCartContext()
  return (
    <Wrapper>
      <div className="header-title">
        <h1>Acme Co.</h1>
        <div className="header-info">
          <p>total items: {totalItems}</p>
          <p>total price: {totalPrice}</p>
          {showCart ? (
            <button onClick={() => setShowCart(false)}>view product</button>
          ) : (
            <button onClick={() => setShowCart(true)}>view cart</button>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  padding: 1rem;
  border-bottom: 2px solid black;

  .header-title {
    width: 95%;
    max-width: 1270px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-info {
    text-transform: capitalize;
    letter-spacing: 2px;
  }

  button {
    width: 120px;
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
      background: #888;
    }
  }
`

export default Header
