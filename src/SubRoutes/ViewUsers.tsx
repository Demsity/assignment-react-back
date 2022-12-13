import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../Components/BreadCrumbs'
import UserCard from '../Elements/UserCard'
 
interface IUser {
  _id: string
  name: string
  email: string
}


function ViewUsers() {
  const [users, setUsers] = useState<IUser[]>([])
  const routeChange:any = useParams()

  const getUsers = async () => {
    const res = await fetch('http://localhost:4000/api/users')
    setUsers(await res.json())
  }


  useEffect(() => {
   
    getUsers()
  
  }, [routeChange])
  

  return (
    <div>
      <Breadcrumbs page='View Users' prevPage='admin' /> 
      {
        users.map(user => <UserCard key={user._id} id={user._id} name={user.name} email={user.email} />)
      }
    </div>
  )
}

export default ViewUsers