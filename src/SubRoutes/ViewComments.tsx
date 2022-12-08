import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Breadcrumbs from '../Components/BreadCrumbs'
import CommentCard from '../Elements/CommentCard'

interface IComments {
  _id: string
  name: string
  email: string
  comment: string
}


function ViewComments() {
  const [comments, setComments] = useState<IComments[]>([])
  const routeChange:any = useParams()

  const getComments = async () => {
    const res = await fetch('http://localhost:4000/api/comments')
    setComments(await res.json())
  }
  
  
  useEffect(() => {
    console.log('useEffect is running')
    getComments()
  }, [routeChange])



  return (
    <div className='__cp-container container'>
      <Breadcrumbs page='View Comments' prevPage='admin' />
      {
        comments!.map(comment => <CommentCard key={comment._id} id={comment._id} name={comment.name} email={comment.email} comments={comment.comment} />)
      }
    </div>
  )
}

export default ViewComments