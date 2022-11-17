import React, { createContext, useState, useContext, ReactNode }  from "react";
import { isTemplateExpression } from "typescript";
import Cart from "../Components/Cart"
import { ProductInterface } from '../Utilities/Interfaces'


interface ICartContext {
    cartItems: ICartItems[]
    cartQuantity: number
    getItemQuantity: (articleNumber: string) => number
    incrementQuantity: (articleNumber: string) => void
    decrementQuantity: (articleNumber: string) => void
    removeItem: (articleNumber: string) => void
}

interface CartProviderProps {
    children: ReactNode
}

interface ICartItems {
    articleNumber: string
    name?: string
    description?: string
    category?: string
    price?: number
    rating?: number
    imageName?: string
    quantity?: number
}


const CartContext = createContext({} as ICartContext)

export const useCart = () => {
    return useContext(CartContext)
}


export const CartProvider = ({children}:CartProviderProps) => {
    const [cartItems, setCartItems] = useState<ICartItems[]>([])



    // function to get total products in cart
    const cartQuantity = cartItems!.reduce(
        (quantity: number, item) => item.quantity! + quantity, 0
    )

    // get the quantity of a single procut
    function getItemQuantity(articleNumber: string) {
        return cartItems.find(item => item.articleNumber === articleNumber)?.quantity || 0
    }

    // increment the product quantity in the shoppingcart
   const incrementQuantity = (articleNumber: string, inputAmount = 1) => {
        setCartItems(currItems => {
            if (currItems.find(item => item.articleNumber === articleNumber) == null) {
                return [...currItems, {articleNumber, quantity: 1}]
            } else {
                return currItems.map(item => {
                    if (item.articleNumber === articleNumber){
                        return { ...item, quantity: item.quantity! + inputAmount}
                    } else {
                        return item
                    }
                })
                }
            }
        )
    }

    // decrement the product quantity in the shoppingcart
    const decrementQuantity = (articleNumber: string) => {
        setCartItems(currItems => {
            if (currItems.find(item => item.articleNumber === articleNumber)?.quantity === 1) {
                return currItems.filter(item => item.articleNumber !== articleNumber)
            } else {
                return currItems.map(item => {
                    if (item.articleNumber === articleNumber){
                        return { ...item, quantity: item.quantity! -1}
                    } else {
                        return item
                    }
                })
                }
            }
        )
    }


    // remove product from cart
    const removeItem = (articleNumber: string) => {
        setCartItems(items => {
            return items.filter(item => item.articleNumber !== articleNumber)
        })
    }


    return 
    (
        <CartContext.Provider value={{ cartItems, cartQuantity, getItemQuantity, incrementQuantity, decrementQuantity, removeItem }}>
            {children}
            <Cart />
        </CartContext.Provider>
    )
    
}