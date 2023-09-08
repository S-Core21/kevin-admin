import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './ViewUsers.css'

const ViewUsers = () => {

    const [user, setUser] = useState()

    useEffect(() => {
        axios.get('https://blogapi-31c0.onrender.com/admin_dashboard/users')
            .then(response => {
                console.log('blog added')
                console.log(response.data)
                setUser(response.data)
            })
            .catch(err => {
                console.log(err, 'not going')
            })
    }, [])

    // function deleteUser (id){
    //     axios.delete(`https://blogapi-31c0.onrender.com/admin_dashboard/${id}`)
    //     .then(response => {
    //         console.log('blog added')
    //         console.log(response.data)
    //     })
    //     .catch(err => {
    //         console.log(err, 'not going')
    //     })
    // }

    return (
        <div className='ViewUsers'>
            <h1>
                Users
            </h1>
            <ul className='headers'>
                <li>Name</li>
                <li>Access</li>
                <li>Email</li>
                {/* <li>Delete</li> */}
            </ul>
            {user &&
                user.users.map(item => {
                    return <ul key={item._id}>
                        <li>{item.username}</li>
                        <li>{item.access}</li>
                        <li>{item.email}</li>
                        {/* <li><img alt='delete' src='/images/del.png'  className='del' /></li> */}
                    </ul>
                })
            }
        </div>
    )
}

export default ViewUsers