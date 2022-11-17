import React, { createContext, ReactNode, useContext, useState } from "react";
import SearchBar from "../Components/SearchBar";

interface IProductsProviderProps {
    children: ReactNode
}

interface IProductContextFunctions  {
    getProducts: () => void
    getProduct: (id:string) => void
    getGridProducts: (take: number) => void
    products: IproductContext[]
    product: IproductContext | undefined
    gridProducts: IproductContext[]
}

interface IproductContext {
    articleNumber: string
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
    const url = 'https://win22-webapi.azurewebsites.net/api/products'
    const [products, setProducts] = useState<IproductContext[]>([])
    const [product, setProduct] = useState<IproductContext>()
    const [gridProducts, setGridProducts] = useState<IproductContext[]>([])

    // fetch all products from API
    const getProducts = async () => {
        const res = await fetch(url)
        setProducts(await res.json())
    }

    // fetch single product from API
    const getProduct = async (articleNumber: string) => {
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