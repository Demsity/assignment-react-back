import React, { createContext, ReactNode, useContext, useState } from "react";
import SearchBar from "../Components/SearchBar";

interface IProductsProviderProps {
    children: ReactNode
}

interface IProductContextFunctions  {
    getProducts: () => void
    getProduct: (id:number) => void
    getGridProducts: (take: number) => void
    getProductsByTag: (tag:string, take: number) => void
    getProductsByPrice: (price: number, take: number) => void
    getProductsByPrice2: (price: number, take: number) => void
    products: IproductContext[]
    product: IproductContext | undefined
    gridProducts: IproductContext[]
    productsByTag: IproductContext[]
    productsByPrice: IproductContext[]
    productsByPrice2: IproductContext[]
}

interface IproductContext {
    articleNumber: number
    name: string
    description: string
    category: string
    price: number
    rating: number
    imageName: string
    tag: string
    quantity?: number
}


const ProductsContext = createContext({} as IProductContextFunctions)

export const useProducts = () => {
    return useContext(ProductsContext)
}




export const ProductsProvider = ({children}:IProductsProviderProps) => {
    const url = 'http://localhost:4000/api/products'
    const [default_product, setDefault_product] = useState<IproductContext>({articleNumber: 0, name: '', description: '', category: '', price: 0, rating: 0, imageName: '', tag: '' })
    const [products, setProducts] = useState<IproductContext[]>([])
    const [product, setProduct] = useState<IproductContext>(default_product)
    const [gridProducts, setGridProducts] = useState<IproductContext[]>([])
    const [productsByTag, setProductsByTag] = useState<IproductContext[]>([])
    const [productsByPrice, setProductsByPrice] = useState<IproductContext[]>([])
    const [productsByPrice2, setProductsByPrice2] = useState<IproductContext[]>([])

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
    // fetch x number specific tag
    const getProductsByTag = async (tag: string ,take = 0) => {
        const res = await fetch(`${url}/get/${tag}?take=${take}`)
        setProductsByTag(await res.json())
        console.log(gridProducts)
        
    }
    // fetch x number with same price
    const getProductsByPrice = async (price: number ,take = 0) => {
        const res = await fetch(`${url}/price/${price}?take=${take}`)
        setProductsByPrice(await res.json())
        
    }
    // fetch x number with same price, second needed for home view
    const getProductsByPrice2 = async (price: number ,take = 0) => {
        const res = await fetch(`${url}/price/${price}?take=${take}`)
        setProductsByPrice2(await res.json())
        
    }

    return (
        <ProductsContext.Provider value= {{ products, product, gridProducts, productsByTag, productsByPrice, productsByPrice2, getProducts, getProduct, getGridProducts, getProductsByTag, getProductsByPrice, getProductsByPrice2, }}>
            {children}
            <SearchBar />
        </ProductsContext.Provider>
    )
}