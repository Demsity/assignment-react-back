import React, { createContext, ReactNode, useContext, useState } from "react";
import SearchBar from "../Components/SearchBar";

interface IProductsProviderProps {
    children: ReactNode
}

interface IProductContextFunctions  {
    getProducts: () => void
    getProduct: (id:number) => void
    getGridProducts: (take: number) => void
    products: IproductContext[]
    product: IproductContext | undefined
    gridProducts: IproductContext[]
}

interface IproductContext {
    articleNumber: number
    name: string
    description: string
    category: string
    price: number
    rating: number
    imageName: string
    quantity?: number
}


const ProductsContext = createContext({} as IProductContextFunctions)

export const useProducts = () => {
    return useContext(ProductsContext)
}




export const ProductsProvider = ({children}:IProductsProviderProps) => {
    const url = 'http://localhost:4000/api/products'
    const [default_product, setDefault_product] = useState<IproductContext>({articleNumber: 0, name: '', description: '', category: '', price: 0, rating: 0, imageName: '' })
    const [products, setProducts] = useState<IproductContext[]>([])
    const [product, setProduct] = useState<IproductContext>(default_product)
    const [gridProducts, setGridProducts] = useState<IproductContext[]>([])

    // fetch all products from API
    const getProducts = async () => {
        const res = await fetch(url)
        setProducts(await res.json())
    }

    // fetch single product from API
    const getProduct = async (articleNumber: number) => {
        const res = await fetch(url + `/${articleNumber}`)
        setProduct(await res.json())
    }

    // fetch x number of products from API
    const getGridProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setGridProducts(await res.json())
        
    }

    return (
        <ProductsContext.Provider value= {{ products, product, gridProducts, getProducts, getProduct, getGridProducts }}>
            {children}
            <SearchBar />
        </ProductsContext.Provider>
    )
}