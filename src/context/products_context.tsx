import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react'

export type ProductType = {
  sku: string
  name: string
  price: number
}

// const initialState: ProductType[] = []

const initialState: ProductType[] = [
  {
    sku: 'item0001',
    name: 'Widget',
    price: 9.99,
  },
  {
    sku: 'item0002',
    name: 'Premium Widget',
    price: 19.99,
  },
  {
    sku: 'item0003',
    name: 'Deluxe Widget',
    price: 29.99,
  },
]

type ProductsContextType = {
  products: ProductType[]
}

const initialContextState: ProductsContextType = { products: [] }

const ProductsContext = createContext<ProductsContextType>(initialContextState)

export type ChildrenType = { children?: ReactElement | ReactElement[] }

const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initialState)

  // useEffect(() => {
  //   const fetchProducts = async (): Promise<ProductType[]> => {
  //     const data = await fetch('http://localhost:3000/products')
  //       .then((res) => {
  //         return res.json()
  //       })
  //       .catch((err) => {
  //         if (err instanceof Error) console.log(err)
  //       })

  //     return data
  //   }

  //   fetchProducts().then((products) => setProducts(products))
  // }, [])

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}

const useProductsConext = () => {
  return useContext(ProductsContext)
}

export { ProductsProvider, useProductsConext }
