import { CartStateType, CartItemType } from '../context/cart_context'

export enum REDUCER_ACTION_TYPE {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  QUANTITY = 'QUANTITY',
  TOTAL = 'TOTAL',
  SUBMIT = 'SUBMIT',
}

type Action = {
  type: REDUCER_ACTION_TYPE
  payload?: CartItemType
}

const cart_reducer = (state: CartStateType, action: Action): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error('Payload missing in ADD action')
      }
      const { sku, name, price } = action.payload
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      )
      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item.sku === sku
      )
      const qty = itemExists ? itemExists.qty + 1 : 1

      /** sort cart based on the item price */
      const updatedCart = [...filteredCart, { sku, name, price, qty }].sort(
        (a, b) => a.price - b.price
      )

      return { ...state, cart: updatedCart }
    }

    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error('Payload missing in REMOVE action')
      }
      const { sku } = action.payload
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      )
      return { ...state, cart: [...filteredCart] }
    }

    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error('Payload missing in REMOVE action')
      }
      const { sku, qty } = action.payload

      const item: CartItemType = state.cart.find(
        (item) => item.sku === sku
      ) as CartItemType

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      )
      const updatedItem = { ...item, qty }

      const updatedCart = [...filteredCart, updatedItem].sort(
        (a, b) => a.price - b.price
      )

      return { ...state, cart: updatedCart }
    }

    case REDUCER_ACTION_TYPE.TOTAL: {
      const { totalItems, totalPrice } = state.cart.reduce(
        (prev, curr) => {
          return {
            totalItems: prev.totalItems + curr.qty,
            totalPrice: prev.totalPrice + curr.qty * curr.price,
          }
        },
        { totalItems: 0, totalPrice: 0 }
      )

      return { ...state, totalItems, totalPrice }
    }

    case REDUCER_ACTION_TYPE.SUBMIT: {
      return { ...state, cart: [] }
    }

    default:
      throw new Error('No such action type.')
  }
}

export default cart_reducer
