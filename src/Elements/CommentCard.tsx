import React, { useState } from 'react'
import { submitData } from '../Utilities/Submit&Validation'

interface CommentCardProps {
    id: string
    name: string
    email: string
    comments: string
}

function CommentCard({ id, name, email, comments }: CommentCardProps) {
    const [deleted, setDeleted] = useState(false)

    const handleRead = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()

        let json = {comments}
        if (submitData) {
            submitData(`http://localhost:4000/api/comments/${id}`, 'DELETE', json )
            setDeleted(true)

        }
    }

    if (deleted) {

        return (
            <div className='__comment-card-container container'>
                <p>Comment from {name} is marked as done</p>
            </div>
        )
    } else {

    }

    return (
        <div className='__comment-card-container container'>
            <div className='__CC-text-wrapper'>
                <p>{name}</p>
                <p>{email}</p>
            </div>
            <div className='__CC-comment-wrapper'>
                <p>{comments}</p>
            </div>
            <form onSubmit={handleRead}>
                <button className='__btn-red' type='submit'>Mark as done and delete</button>
            </form>
        </div>
    )
}

export default CommentCard