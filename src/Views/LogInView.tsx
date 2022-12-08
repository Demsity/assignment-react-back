import { stringify } from 'querystring'
import React, { useState } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

interface IUser {
  name?: string
  email: string
  password: string
}


function LogInView() {
  const [page, setPage] = useState(true)
  const [error, setError] = useState('')
  const [default_user, setDefault_user] = useState<IUser>({name: '', email: '', password: ''})
  const [user, setUser] = useState<IUser>(default_user)

  const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>)=>{
    const {name, value} = e.target
    setUser({...user, [name]: value })
}


  const onLogin = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()

    fetch('http://localhost:4000/api/users/login', {
      method: 'post', 
      headers: {
          'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(user)
  })
  .then (res => {
      if (res.status === 201 || res.status === 200) {
          setPage(true)
          setUser(default_user)
      }else if (res.status === 404 || res.status === 400) {
        setError('User or password was incorrect or not registerd')
        setUser(default_user)
      } else {
        setError('Something went wrong. Error 500')
        setUser(default_user)
      }
      
      
  })
  }

  const onRegister = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()

    fetch('http://localhost:4000/api/users/register', {
      method: 'post', 
      headers: {
          'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(user)
  })
  .then (res => {
      if (res.status === 201 || res.status === 200) {
          setPage(true)
          setUser(default_user)
      } else if (res.status === 409) {
        setError('Email is already in use')
        setUser(default_user)
      } else {
        setError('Something went wrong. Error 500')
        setUser(default_user)
      }
      
  })
  }

  if (page) {
    return (
      <>
        <Navbar />
          <div className='__login-container container'>
            <h2>Login</h2>
            <p>{error}</p>
            <form className='__login-form' onSubmit={onLogin}>
              <input type="text" name='email' placeholder='Email' value={user.email} onChange={onChange} />
              <input type="password" name='password' placeholder='Password' value={user.password} onChange={onChange} />
              <div>
                <button className='__btn-red' type='submit' >Login</button>
                <button className='__btn-red' type='button' onClick={() => setPage(false)} >Register</button>
              </div>
            </form>
          </div>
        <Footer />
      </>
    )
  } else {
    return (
      <>
        <Navbar />
          <div className='__login-container container'>
            <h2>Register</h2>
            <p>{error}</p>
            <form onSubmit={onRegister} className='__login-form'>
              <input type="text" name='name' placeholder='Name' value={user.name} onChange={onChange} />
              <input type="text" name='email' placeholder='Email' value={user.email} onChange={onChange} />
              <input type="password" name='password' placeholder='Password' value={user.password} onChange={onChange} />
              <div>
                <button className='__btn-red' type='submit' >Register</button>
                <button className='__btn-red' type='button' onClick={() => setPage(true)} >Login</button>
              </div>
            </form>
          </div>
        <Footer />
      </>
    )
  }


}

export default LogInView