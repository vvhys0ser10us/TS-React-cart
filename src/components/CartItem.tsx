import styled from 'styled-components'
import { CartItemType, useCartContext } from '../context/cart_context'

type PropType = {
  item: CartItemType
}

const CartItem = ({ item }: PropType) => {
  const { updateQty, removeItem } = useCartContext()
  const img: string = new URL(`../assets/${item.sku}.jpg`, import.meta.url).href
  const highestQty: number = 20 > item.qty ? 20 : item.qty
  const optionValues: number[] = [...Array(highestQty).keys()].map((i) => i + 1)

  return (
    <Wrapper>
      <div className="cart-item">
        <div className="item-info">
          <h4>{item.name}</h4>
          <img src={img} alt="image" />
          <h4>${item.price.toFixed(2)}</h4>
        </div>
        <select
          name="itemQty"
          value={item.qty}
          onChange={(e) => updateQty({ ...item, qty: Number(e.target.value) })}
        >
          {optionValues.map((val, index) => {
            return (
              <option value={val} key={index}>
                {val}
              </option>
            )
          })}
        </select>
        <button onClick={() => removeItem(item)}>remove</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  padding: 1rem;

  .cart-item {
    padding: 1rem;
    border-bottom: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .item-info {
    img {
      height: 125px;
      border-radius: 5px;
    }

    h4 {
      letter-spacing: 1px;
      width: 110px;
      text-transform: capitalize;
    }
  }

  @media (min-width: 900px) {
    .item-info {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      column-gap: 2rem;
    }
  }

  button {
    border: transparent;
    background: #777;
    color: #fff;
    padding: 0.5rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.5s linear;
    &:hover {
      background: #111;
    }
  }
`

export default CartItem
