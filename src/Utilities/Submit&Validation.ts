import { stringify } from "querystring"
import { ProductInterface } from "./Interfaces"

interface ValidateI {
    name: string
    email: string
    comments: string
}

interface InewProduct {
    name: string
    description: string
    category: string
    price: number 
    rating: number 
    imageName: string
}

interface IError {
    name: string
    description: string
    category: string
    price: string
    rating: string
    imageName: string
}

// validate Product for creating
export const validateProduct = (values: InewProduct) => {
    let error: IError = {name: '', description: '', category: '', price: '', rating: '', imageName: ''}
    if (values.name === ''){
        error.name = 'Please enter a name'
    } 

    if (values.description === ''){
        error.description = 'Please enter a description'
    } 

    if (values.category === ''){
        error.category = 'Please enter a category'
    } 

    if (isNaN(values.price)){
        error.price = 'You must enter a number'
    } 
    if (isNaN(values.rating)){
        error.rating = 'You must enter a number'
    } 
    
    if (values.rating < 1 || values.rating > 5) {
        error.rating = 'Rating must be between 1 and 5'
    }
    if (values.imageName === ''){
        error.imageName = 'Please enter a Image Link'
    } 
    return error
}


// Validate form

export const validate =(values: ValidateI)=> {
    const error = {name: '', email: '', comments: ''}
    
    if (values.name === ''){
        error.name = 'Please enter your name'
    } else if (values.name.length < 2) {
        error.name = 'You must enter atleast 2 characters'
    } 

    if (values.email === ''){
        error.email = 'Please enter your email'
    } else if (!validateEmail(values.email)) {
        error.email = 'Enter a valid email adress (eg. domain@domain.com)'
    }

    if (values.comments === ''){
        error.comments = 'Please enter your comments'
    } else if (values.comments.length < 5) {
        error.comments = 'Please enter atleast 5 characters'
    }
    return error
}

// validate email func
const validateEmail = (email:string) => {
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// Submit form to API
export const submitData = (url: string, method: string, data: any, contentType = 'application/json') => {
    fetch(url, {
        method: method, 
        headers: {
            'Content-Type': contentType
        }, 
        body: JSON.stringify(data)
    })
    .then (res => {
        if (res.status === 201 || res.status === 200) {
            return true
        }
        return false
        
    })
}

// Remove item from API
export const removeData = (url: string, method: string, articleNumber: number ) => {
    fetch(url, {
        method: method, 
    })
    .then (res => {
        if (res.status === 204) {
            return true
        }
        return false
        
    })
}