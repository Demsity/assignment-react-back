import React, { useEffect, useState } from 'react'
import { ProductInterface } from '../Utilities/Interfaces'
import { submitData, validateProduct } from '../Utilities/Submit&Validation'

interface INewProduct {
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


function CreateProduct() {
  const [default_product, setDefault_product] = useState<INewProduct>({name: '', description: '', category: '', price: NaN, rating: NaN, imageName: ''})
  const [default_error, setDefault_error] = useState<IError>({name: '', description: '', category: '', price: '', rating: '', imageName: ''})
  const [newProduct, setNewProduct] = useState<INewProduct>(default_product)
  const [productError, setProductError] = useState<IError>(default_error)
  const [formSubmitted, setFormSubmitted] = useState(false)


  const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>)=>{
    const {id, value} = e.target
    setNewProduct({...newProduct, [id]: value })
    setFormSubmitted(false)
  } 
  const onChangeNumber = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const {id, value} = e.target
    setNewProduct({...newProduct, [id]: parseInt(value) })
  }

  useEffect(() => {
    setProductError(validateProduct(newProduct))
    
  }, [newProduct])



  const handleSubmit = (e:React.FormEvent<EventTarget>) => {
    e.preventDefault()
    
    if (
      productError.name === '' &&
      productError.description === '' && 
      productError.category === '' && 
      productError.price === '' && 
      productError.rating === '' && 
      productError.imageName === ''
      ) {
                
      let json = {...newProduct}
      if (submitData) {
          submitData('http://localhost:4000/api/products', 'POST', json )
          setNewProduct(default_product)
          setFormSubmitted(true)
          
      }

    } else {
      console.log('Form not submitted')
      
    }
}


  return (
    <div className='container __cp-container'>
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
        {
          formSubmitted ? <div>Product Created</div> : <div></div>
        }
        <button className='__btn-red mt-3'>Create Product</button>
      </form>
    </div>
  )
}

export default CreateProduct