import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../Components/BreadCrumbs'
import { useProducts } from '../Contexts/ProductsContext'
import { validateProduct } from '../Utilities/Submit&Validation'
import { putProductQuery, removeProductQuery } from '../GraphQL/Mutations'
import { getProductQuery } from '../GraphQL/Queries'
import { useMutation, useQuery } from '@apollo/client'

interface INewProduct {
    _id: string
    name: string
    description: string
    category: string
    price: number
    rating: number
    imageName: string
    tag: string
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
    const [default_product, setDefault_product] = useState<INewProduct>({ _id: '', name: '', description: '', category: '', price: NaN, rating: NaN, imageName: '', tag: ''})
    const [default_error, setDefault_error] = useState<IError>({name: '', description: '', category: '', price: '', rating: '', imageName: ''})
    const [updatedProduct, setUpdatedProduct ] = useState(default_product)
    const [productError, setProductError] = useState<IError>(default_error)
    const [pageState, setPageState] = useState('')
    const [query, setQuery] = useState({articleNumber: ''})
    const [userLoaded, setUserLoaded] = useState(false)
    const { product, getProduct} = useProducts()
    const [updateProduct] = useMutation(putProductQuery)
    const [removeProduct] = useMutation(removeProductQuery)

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

    const {loading, error, data, refetch} = useQuery(getProductQuery(query.articleNumber), {
        skip: (!userLoaded)
    })


    // refetch from GraphQL
    useEffect(() => {
        refetch()
        if(data) {
            console.log(data.product)
            setUpdatedProduct(data.product)
        }

      }, [userLoaded])

    // Validate update form
    useEffect(() => {
        setProductError(validateProduct(updatedProduct))
        
      }, [updatedProduct])

      const onRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setUpdatedProduct({...updatedProduct, [name]: value})
      } 

    const handleSubmitLoad = (e : React.FormEvent<EventTarget>) => {
        e.preventDefault()
        console.log(query.articleNumber)
        setUserLoaded(true)
        
 
    }
    


    const handleSubmit = (e : React.FormEvent<EventTarget>) => {

        e.preventDefault()

        updateProduct({variables: {
            _id: updatedProduct._id,
            name: updatedProduct.name,
            description: updatedProduct.description,
            category: updatedProduct.category,
            tag: updatedProduct.tag,
            price: updatedProduct.price.toString(),
            rating: updatedProduct.rating.toString(),
            imageName: updatedProduct.imageName
          }})
          setUserLoaded(false)
          setPageState(`Product with id ${query.articleNumber} is updated`)
          setUpdatedProduct(default_product)
      
    }

    const handleRemove = (e : React.FormEvent<EventTarget>) => {

        e.preventDefault()

        removeProduct({variables: {
            _id: updatedProduct._id,

        }})
        setUserLoaded(false)
        setPageState(`Product with id ${query.articleNumber} has been removed`)
        setUpdatedProduct(default_product)
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
                        <div className='__radio-buttons'>
                            <div className='__radio-wrapper'>
                                <input type='radio' name='tag' value='featured' onChange={event => onRadio(event)}  />
                                <label>Featured Product</label>
                            </div>
                            <div className='__radio-wrapper'>
                                <input type='radio' name='tag' value='news' onChange={event => onRadio(event)}  />
                                <label>News</label>
                            </div>
                            <div className='__radio-wrapper'>
                                <input type='radio' name='tag' value='' onChange={event => onRadio(event)}  />
                                <label>No Tag</label>
                            </div>
                        </div>
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