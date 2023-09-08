import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './SignUp.css'


const SignUp = () => {

    const [signUpsuccess, setSignUpsuccess] = useState('')
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        access: '',
        twitter: '',
        linkedin: ''
    })

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const body = {
        username : formData.username,
        email: formData.email,
        password: formData.password,
        access: formData.access,
        linkedInId : formData.linkedin,
        twitterId : formData.twitter
    }

    // useEffect(()=>{
    
    // })
    function handleSubmit (e){
        e.preventDefault()
        axios.post('https://blogapi-31c0.onrender.com/register', body )
        .then(res =>{
            console.log(res)
            console.log('data sent')
            setSignUpsuccess('User successfully added. Proceed to view users')
        })
        .catch(err=>{
            console.log(err)
        })
    }

  return (
    <div className='signUp'>
        <h1>
            Add User
        </h1>
        <form onSubmit={handleSubmit}>
            <div>
            <label>
                Fullname :  
                <input
                 type='text'
                 name='username'
                 onChange={handleChange}
                 value={formData.username}
                 />
            </label>
            </div>
            <div>
            <label>
                Email Address :  
                <input
                 type='text'
                 name='email'
                 onChange={handleChange}
                 value={formData.email}
                 />
            </label>
            </div>
            <div>
            <label>
                Passowrd :  
                <input
                 type='text'
                 name='password'
                 onChange={handleChange}
                 value={formData.password}
                 />
            </label>
            </div>
            <div>
            <label>
                Access :  
                <input
                 type='text'
                 name='access'
                 onChange={handleChange}
                 value={formData.access}
                 placeholder='admin or Sub-admin'
                 />
            </label>
            </div>
           <div>
            <label>
                Twitter Link (URL) :  
                <input
                 type='text'
                 name='twitter'
                 onChange={handleChange}
                 value={formData.twitter}
                 />
            </label>
            </div>
            <div>
            <label>
                LinkedIn link(URL) :  
                <input
                 type='text'
                 name='linkedin'
                 onChange={handleChange}
                 value={formData.linkedin}
                 />
            </label>
            </div>
            <strong>
             {signUpsuccess}
            </strong>
            
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default SignUp 