import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../Components/BreadCrumbs'
import { useProducts } from '../Contexts/ProductsContext'
import { submitRestrictedData, validateProduct } from '../Utilities/Submit&Validation'

interface INewProduct {
    articleNumber: string
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


function UpdateProduct() {
    const [default_product, setDefault_product] = useState<INewProduct>({ articleNumber: '', name: '', description: '', category: '', price: NaN, rating: NaN, imageName: ''})
    const [default_error, setDefault_error] = useState<IError>({name: '', description: '', category: '', price: '', rating: '', imageName: ''})
    const [updatedProduct, setUpdatedProduct ] = useState(default_product)
    const [productError, setProductError] = useState<IError>(default_error)
    const [pageState, setPageState] = useState('')
    const [query, setQuery] = useState({articleNumber: ''})
    const [userLoaded, setUserLoaded] = useState(false)
    const { product, getProduct} = useProducts()

    // set updated product if input is a string
    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>)=>{
        const {id, value} = e.target
        setUpdatedProduct({...updatedProduct, [id]: value })
    } 

    // set updated product if input is a number
    const onChangeNumber = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {id, value} = e.target
        setUpdatedProduct({...updatedProduct, [id]: parseInt(value) })
    }

    // set query state
    const onChangeQuery = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const { id, value } = e.target
        setQuery({...query, [id]: value })
    }

    // Validate update form
    useEffect(() => {
        setProductError(validateProduct(updatedProduct))
        
      }, [updatedProduct])

    

    const handleSubmitLoad = (e : React.FormEvent<EventTarget>) => {
        e.preventDefault()
        getProduct(query.articleNumber)
        setUpdatedProduct(product!)
        setUserLoaded(true)
    }
    



    const handleSubmit = (e : React.FormEvent<EventTarget>) => {

        e.preventDefault()

            fetch(`http://localhost:4000/api/products/${query}`, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accesToken')}`
                }, 
                body: JSON.stringify(updatedProduct)
            })
            .then (res => {
                if (res.status === 201 || res.status === 200 || res.status === 204) {
                    setUserLoaded(false)
                    setPageState(`Updated product with article-number:  ${query.articleNumber}`)
                } else if (res.status === 401) {
                    setUserLoaded(false)
                    setPageState('Error 401: unauthorized')
                    console.log('Error 401')
                } else {
                    console.log('error')
                    setPageState('Error')
                }
            })
    }

    const handleRemove = (e : React.FormEvent<EventTarget>) => {

        e.preventDefault()

            fetch(`http://localhost:4000/api/products/${query}`, {
                method: 'delete', 
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accesToken')}`
                }, 
                body: JSON.stringify(query)
            })
            .then (res => {
                if (res.status === 201 || res.status === 200 || res.status === 204) {
                    setUserLoaded(false)
                    setPageState(`Removed product with article-number:  ${query.articleNumber}`)
                } else if (res.status === 401) {
                    setUserLoaded(false)
                    setPageState('Error 401: unauthorized')
                    console.log('Error 401')
                } else {
                    console.log('error')
                    setPageState('Error')
                }
            })
    }


    if (!userLoaded) {
        return (
                <div className='__cp-container container'>
                    <Breadcrumbs page='Update Product' prevPage='Admin' />
                    <form onSubmit={handleSubmitLoad} className='__cp-form'>
                        <h3 className='mb-4'>{pageState}</h3>
                        
                        <h3 className='mb-3'>Update Product</h3>
                        <input className='mb-4' onChange={event => onChangeQuery(event)} id='articleNumber' type="text" placeholder='Search for Article Number' />
                        <button className='__btn-red'>Search Product</button>
                    </form>
                    
                </div>
          )
    } else {
        return (
            <div className='__cp-container container'>
                    <Breadcrumbs page='Update Product' prevPage='Admin' />
                      <form onSubmit={handleSubmit} className='__cp-form' noValidate>
                         <h3 className='mb-3'>Update Product</h3>
                        <label>Title</label>
                        <input type="text" id='name' value={updatedProduct.name} onChange={event => onChange(event)} />
                        <div id='name-error' className='__text-error'>{productError.name}</div>
                        <label>Price</label>
                        <input type="number" id='price' value={updatedProduct.price.toString()} onChange={event => onChangeNumber(event)} />
                        <div id='name-error' className='__text-error'>{productError.price}</div>
                        <label>Rating</label>
                        <input type="number" id='rating' value={updatedProduct.rating.toString()} onChange={event => onChangeNumber(event)} />
                        <div id='name-error' className='__text-error'>{productError.rating}</div>
                        <label>Description</label>
                        <textarea id='description' value={updatedProduct.description} onChange={event => onChange(event)} />
                        <div id='name-error' className='__text-error'>{productError.description}</div>
                        <label>Category</label>
                        <input id='category' type="text" value={updatedProduct.category} onChange={event => onChange(event)} />
                        <div id='name-error' className='__text-error'>{productError.category}</div>
                        <label>Image(link)</label>
                        <input id='imageName' type="text" value={updatedProduct.imageName} onChange={event => onChange(event)} />
                        <div id='name-error' className='__text-error'>{productError.imageName}</div>
                        <button className='__btn-red mt-3'>Update Product</button>
                    </form>
                    <form onSubmit={handleRemove}>
                        <button className='__btn-red' type='submit'>Delete Product</button>
                    </form>
            </div>
          )
    }


  return (
    <div className='__cp-container container'>

    </div>
  )
}

export default UpdateProduct