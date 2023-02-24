import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import { ChildrenType, ProductType } from './products_context'
import reducer, { REDUCER_ACTION_TYPE } from '../reducer/cart_reducer'

/**type for cart item */
export type CartItemType = {
  sku: string
  name: string
  price: number
  qty: number
}

/**type for cart state, used in cart reducer */
export type CartStateType = {
  cart: CartItemType[]
  totalItems: number
  totalPrice: number
}

const initialCartState: CartStateType = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
}

/**type for CartContext */
type CartContextType = {
  cart: CartItemType[]
  totalItems: number
  totalPrice: number
  addToCart: (product: ProductType) => void
  removeItem: (cartItem: CartItemType) => void
  updateQty: (cartItem: CartItemType) => void
  checkout: () => void
}

const CartContext = createContext<CartContextType>({} as CartContextType)

const CartProvider = ({ children }: ChildrenType): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialCartState)

  useEffect(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.TOTAL })
  }, [state.cart])

  const addToCart = (product: ProductType) => {
    dispatch({ type: REDUCER_ACTION_TYPE.ADD, payload: { ...product, qty: 1 } })
  }

  const removeItem = (cartItem: CartItemType) => {
    dispatch({ type: REDUCER_ACTION_TYPE.REMOVE, payload: cartItem })
  }

  const updateQty = (cartItem: CartItemType) => {
    dispatch({ type: REDUCER_ACTION_TYPE.QUANTITY, payload: cartItem })
  }

  const checkout = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.SUBMIT })
  }

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, updateQty, checkout }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCartContext = () => {
  return useContext(CartContext)
}

export { CartProvider, useCartContext }
