import React, { useState } from 'react'
import { submitRestrictedData } from '../Utilities/Submit&Validation'

interface userCardProps {
    id: string
    name: string
    email: string
}

function UserCard({ id, name, email }: userCardProps) {
    const [deleted, setDeleted] = useState(false)

    const handleDelete = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()




        fetch(`http://localhost:4000/api/users/${id}`, {
            method: 'delete', 
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accesToken')}`
            }, 
        })
        .then (res => {
            if (res.status === 201 || res.status === 200 || res.status === 204) {
                setDeleted(true)
            } else if (res.status === 401) {
                console.log('Error 401: unauthorized')
            } else {
                console.log('error')
            }
        })




        let json = {}
        if (submitRestrictedData) {
            submitRestrictedData(`http://localhost:4000/api/users/${id}`, 'DELETE', json )
            setDeleted(true)

        } else {
            console.log('401 Unatherized')
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