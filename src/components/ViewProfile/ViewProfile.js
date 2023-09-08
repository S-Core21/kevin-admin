import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './ViewProfile.css'
import { Colors } from 'chart.js'

const ViewProfile = () => {
    const user = localStorage.getItem('data')
    const profile = JSON.parse(user)
    const [data, setData] = useState()
    const [pwd, setPwd]= useState(false)
    const [msg, setMsg] = useState('')
    const [edit, setEdit] = useState(false)
    const [info, setInfo] = useState(false)
    const [profileInfo, setProfileInfo] = useState(false)

    useEffect(()=>{
        axios.get(`https://blogapi-31c0.onrender.com/admin_dashboard/${profile._id}`)
        .then(response => {
          setData(response.data)
          setInfo(true)
          setEdit(false)
          setMsg('')
          setPwd(false)
          console.log('data')
        })
        .catch(err => {
          console.log(err)
        })
    },[])

    console.log(profile)
    // console.log(data.password)



  
    const [formData, setFormData] = useState({
        username: profile.username,
        email: profile.email,
        password: '',
        Cpassword: '',
        twitter: profile.twitterId,
        linkedin: profile.linkedInId,
        description: profile.description
    })
    
    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    function editProfiles (){
        setEdit(true)
        setInfo(false)
    }
    function setPassword (){
        setInfo(false)
        setEdit(false)
        setPwd(true)
    }

      const body = {
        userId: profile._id,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        twitterId: formData.twitter,
        linkedInId: formData.linkedin,
        description: formData.description
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log('prevented')
        axios.put(`https://blogapi-31c0.onrender.com/admin_dashboard/${profile._id}`, body)
            .then(response => {
                console.log('blog added')
                console.log(response.data)
                setMsg('Profile details updated')
            })
            .catch(err => {
                console.log(err)
                setMsg('Profile details not updated')
            })
    }

    function handleSubmitPwd(e) {
        e.preventDefault()
        console.log('prevented')
        if(formData.password === formData.Cpassword){
            axios.put(`https://blogapi-31c0.onrender.com/admin_dashboard/${profile._id}`, body)
            .then(response => {
                console.log('blog added')
                console.log(response.data)
                setMsg('Password updated')
            })
            .catch(err => {
                console.log(err)
                setMsg('Password not updated')
            })
        }else{
            setMsg('password does not match')
        }
        
    }

   

    return (
         <div className='profile'>
            <h1>
                Profile Details
            </h1>
            <main className='profile_edit'>
                <img src='/images/profile.png' alt='profile_pic' />
                <button onClick={editProfiles} style={{cursor:'pointer'}} >Edit Profile</button>
                <button onClick={setPassword} style={{cursor:'pointer'}} >Change Password</button>
            </main>
            {
                info && <form className='profile_details'>
                <div>
                    <label>
                        Fullname :
                        <input
                            type='text'
                            name='username'
                            // onChange={handleChange}
                             readOnly = {edit ? false : true}
                            value={data.username}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email Address :
                        <input
                            type='text'
                            name='email'
                            // onChange={handleChange}
                             readOnly = {edit ? false : true}
                            value={data.email}
                        />
                    </label>
                </div>
              
                <div>
                    <label>
                        Twitter Link (URL) :
                        <input
                            type='text'
                            name='twitter'
                            // onChange={handleChange}
                             readOnly = {edit ? false : true}
                            value={data.twitterId}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        LinkedIn link(URL) :
                        <input
                            type='text'
                            name='linkedin'
                            // onChange={handleChange}
                             readOnly = {edit ? false : true}
                            value={data.linkedInId}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Description :
                        <input
                            type='text'
                            name='description'
                            // onChange={handleChange}
                             readOnly = {edit ? false : true}
                            value={data.description}
                        />
                    </label>
                </div>
            </form>
            }
            {
                edit && <form className='profile_details' onSubmit={handleSubmit}>
                <div>
                    <label>
                        Fullname :
                        <input
                            type='text'
                            name='username'
                            onChange={handleChange}
                             readOnly = {edit ? false : true}
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
                             readOnly = {edit ? false : true}
                            value={formData.email}
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
                             readOnly = {edit ? false : true}
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
                             readOnly = {edit ? false : true}
                            value={formData.linkedin}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Description :
                        <input
                            type='text'
                            name='description'
                            onChange={handleChange}
                             readOnly = {edit ? false : true}
                            value={formData.description}
                        />
                    </label>
                </div>
                <span style={{fontFamily:'Monts boldl', fontSize:'20px'}}>{msg}</span>
                <span>
                    <button type='submit'>
                        Save Changes
                    </button>
                </span>
            </form>
            }
            {
                pwd && <form className='profile_details' onSubmit={handleSubmitPwd}>
               
                <div>
                    <label>
                        New Passowrd :
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
                        Confirm Passowrd :
                        <input
                            type='text'
                            name='Cpassword'
                            onChange={handleChange}
                            value={formData.Cpassword}
                        />
                    </label>
                </div>
               
                <span style={{fontFamily:'Monts boldl', fontSize:'20px'}}>{msg}</span>
                <span>
                    <button type='submit'>
                        Save Changes
                    </button>
                </span>
            </form>
            }
            
        </div>
      
    )
}

export default ViewProfile