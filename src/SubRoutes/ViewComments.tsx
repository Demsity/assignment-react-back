import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Breadcrumbs from '../Components/BreadCrumbs'
import CommentCard from '../Elements/CommentCard'
import { getCommentsQuery } from '../GraphQL/Queries'

interface IComments {
  _id: string
  name: string
  email: string
  comment: string
}


function ViewComments() {
  const routeChange:any = useParams()

  const {loading, error, data} = useQuery(getCommentsQuery)
  
  if(loading) 
    return (<div>loading...</div>)
  if(error)
    return (<div>Error...</div>)

  return (
    <div className='__cp-container container'>
      <Breadcrumbs page='View Comments' prevPage='admin' />
      {
        data.comments.map((comment:IComments) => <CommentCard key={comment._id} id={comment._id} name={comment.name} email={comment.email} comments={comment.comment} />)
      }
    </div>
  )
}

export default ViewComments