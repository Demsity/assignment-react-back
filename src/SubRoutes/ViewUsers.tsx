import { useQuery } from '@apollo/client'
import React from 'react'
import Breadcrumbs from '../Components/BreadCrumbs'
import UserCard from '../Elements/UserCard'
import { getUsersQuery } from '../GraphQL/Queries'
 
interface IUser {
  _id: string
  name: string
  email: string
}


function ViewUsers() {
  const {loading, error, data} = useQuery(getUsersQuery)
  
  if(loading) 
    return (<div>loading...</div>)
  if(error)
    return (<div>Error...</div>)

  

  return (
    <div>
      <Breadcrumbs page='View Users' prevPage='admin' /> 
      {
        data.users.map((user: IUser) => <UserCard key={user._id} id={user._id} name={user.name} email={user.email} />)
      }
    </div>
  )
}

export default ViewUsers