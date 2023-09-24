import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Newsletter = () => {


    const [user, setUser] = useState()

    useEffect(() => {
        axios.get('https://blogapi-31c0.onrender.com/api/all_newsletters')
            .then(response => {
                console.log('blog added')
                console.log(response.data.mail)
                setUser(response.data.mail)
            })
            .catch(err => {
                console.log(err, 'not going')
            })
    }, [])

    function delSub(id){
            axios.delete(`https://blogapi-31c0.onrender.com/api/newsletter/${id}`)
        .then(response => {
            console.log('deleted')
            console.log(response.data.mail)
        })
        .catch(err => {
            console.log(err, 'not going')
        })
        
    }


  return (
    <div className='ViewUsers'>
    <h1>
        Newsletter
    </h1>
    <ul className='headers'>
        <li>Name</li>
        <li>Email</li>
        {/* <li>Delete</li> */}
    </ul>
    {user &&
        user.map(item => {
            return <ul key={item._id}  >
                <li>{item.fullname}</li>
                <li>{item.email}</li>
                <li className='delL' onClick={()=>{
                    delSub(item._id)
                }}><img alt='delete' src='/images/del.png' /></li>
            </ul>
        })
    }
</div>
  )
}

export default Newsletter