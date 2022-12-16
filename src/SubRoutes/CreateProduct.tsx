import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../Components/BreadCrumbs'
import { ProductInterface } from '../Utilities/Interfaces'
import { validateProduct, submitRestrictedData } from '../Utilities/Submit&Validation'
import {useMutation} from '@apollo/client'
import { postProductQuery } from '../GraphQL/Mutations'

interface INewProduct {
  name: string
  description: string
  category: string
  price: number
  rating: number
  tag: string
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


function CreateProduct() {
  const [default_product, setDefault_product] = useState<INewProduct>({name: '', description: '', category: '', price: NaN, rating: NaN, tag: '', imageName: ''})
  const [default_error, setDefault_error] = useState<IError>({name: '', description: '', category: '', price: '', rating: '', imageName: ''})
  const [newProduct, setNewProduct] = useState<INewProduct>(default_product)
  const [productError, setProductError] = useState<IError>(default_error)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [pageState, setPageState] = useState('')
  const [addProduct] = useMutation(postProductQuery)


  const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>)=>{
    const {id, value} = e.target
    setNewProduct({...newProduct, [id]: value })
    setFormSubmitted(false)
  } 
  const onChangeNumber = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const {id, value} = e.target
    setNewProduct({...newProduct, [id]: parseInt(value) })
  }

  const onRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setNewProduct({...newProduct, [name]: value})
  } 

  useEffect(() => {
    setProductError(validateProduct(newProduct))
    
  }, [newProduct])



  const handleSubmit = (e:React.FormEvent<EventTarget>) => {
    e.preventDefault()
    console.log(newProduct)
    if (
      productError.name === '' &&
      productError.description === '' && 
      productError.category === '' && 
      productError.price === '' && 
      productError.rating === '' && 
      productError.imageName === ''
      ) {

        addProduct({variables: {
          name: newProduct.name,
          description: newProduct.description,
          category: newProduct.category,
          tag: newProduct.tag,
          price: newProduct.price.toString(),
          rating: newProduct.rating.toString(),
          imageName: newProduct.imageName
        }})

        setFormSubmitted(true)
        setPageState('Product Created')
        setNewProduct(default_product)
    }
}

  return (
    <div className='container __cp-container'>
      <Breadcrumbs page='Create Product' prevPage='Admin' />
        {
          formSubmitted ? <div>{pageState}</div> : <div></div>
        }
      <form onSubmit={handleSubmit} className='__cp-form' noValidate>
        <label>Title</label>
        <input type="text" id='name' value={newProduct.name} onChange={event => onChange(event)} />
        <div id='name-error' className='__text-error'>{productError.name}</div>
        <label>Price</label>
        <input type="number" id='price' value={newProduct.price.toString()} onChange={event => onChangeNumber(event)} />
        <div id='name-error' className='__text-error'>{productError.price}</div>
        <label>Rating</label>
        <input type="number" id='rating' value={newProduct.rating.toString()} onChange={event => onChangeNumber(event)} />
        <div id='name-error' className='__text-error'>{productError.rating}</div>
        <label>Description</label>
        <textarea id='description' value={newProduct.description} onChange={event => onChange(event)} />
        <div id='name-error' className='__text-error'>{productError.description}</div>
        <label>Category</label>
        <input id='category' type="text" value={newProduct.category} onChange={event => onChange(event)} />
        <div id='name-error' className='__text-error'>{productError.category}</div>
        <label>Image(link)</label>
        <input id='imageName' type="text" value={newProduct.imageName} onChange={event => onChange(event)} />
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
        <button className='__btn-red mt-3'>Create Product</button>
      </form>
    </div>
  )
}

export default CreateProduct