import React, { useState } from 'react'
import { submitData } from '../Utilities/Submit&Validation'

interface userCardProps {
    id: string
    name: string
    email: string
}

function UserCard({ id, name, email }: userCardProps) {
    const [deleted, setDeleted] = useState(false)

    const handleDelete = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()

        let json = {}
        if (submitData) {
            submitData(`http://localhost:4000/api/users/${id}`, 'DELETE', json )
            setDeleted(true)

        }
    }

    if (deleted) {

        return (
            <div className='__comment-card-container container'>
                <p>User with {id} is deleted</p>
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
                <p>{`User ID: ${id}`}</p>
            </div>
            <form onSubmit={handleDelete}>
                <button className='__btn-red' type='submit'>Delete User</button>
            </form>
        </div>
    )
}

export default UserCard