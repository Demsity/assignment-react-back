
import React, { createContext, useState, useContext }  from "react";
import Cart from "../Cart/Cart"


const CartContext = createContext()

export const useCart = () => {
    return useContext(CartContext)
}

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])

    // function to get total products in cart
    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    // get the quantity of a single procut
    const getItemQuantity = (articleNumber) => {
        return cartItems.find(item => item.articleNumber === articleNumber).quantity
    }
    // increment the product quantity in the shoppingcart
    const incrementQuantity = (cartItem, itemQuantity = 1) => {
        const {articleNumber, name, price, imageName } = cartItem

        setCartItems(items => {
            if (items.find(item => item.articleNumber === articleNumber) == null) {
                return [...items, { articleNumber, name, price, imageName, quantity: itemQuantity }]
            } else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return {...item, quantity: item.quantity + 1}
                    }  else {
                        return item
                    }
                })
            }
        })
    }
    // decrement the product quantity in the shoppingcart
    const decrementQuantity = (cartItem) => {
        const {articleNumber} = cartItem

        setCartItems(items => {
            if (items.find(item => item.articleNumber === articleNumber) === 1) {
                return items.filter(item => item.articleNumber !== articleNumber)
            } else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return {...item, quantity: item.quantity - 1}
                    }  else {
                        return item
                    }
                })
            }
        })
    }
    // remove product from cart
    const removeItem = (articleNumber) => {
        setCartItems(items => {
            return items.filter(item => item.articleNumber !== articleNumber)
        })
    }


    return <CartContext.Provider value={{ cartItems, cartQuantity, getItemQuantity, incrementQuantity, decrementQuantity, removeItem }} >
        {children}
        <Cart />
    </CartContext.Provider>
}