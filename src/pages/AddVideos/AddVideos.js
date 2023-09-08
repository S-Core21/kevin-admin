import React, { useEffect } from 'react'
import './AddVideos.css'
import './../../components/ViewProfile/ViewProfile.css'
import { useState } from 'react'
import axios from 'axios'

const AddVideos = () => {
    const [isUploaded, setIsUploaded] = useState('')
    const [formData, setFormData] = useState({
        title: '',
        link: ''
    })
    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const body ={
        title: formData.title,
        link: formData.link
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log('prevented')
        axios.post('https://blogapi-31c0.onrender.com/', body)
            .then(response => {
                console.log('blog added')
                console.log(response.data)
                setIsUploaded('VIDEO UPLOADED')
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(()=>{
        setIsUploaded('')
    },[])

  return (
    <div className='profile'>
        <h2>
            Add Video 
        </h2>
        <form className='profile_details' onSubmit={handleSubmit}>
        <div>
                    <label>
                        Video Title :
                        <input
                            type='text'
                            name='username'
                            onChange={handleChange}
                            value={formData.title}
                        />
                    </label>
                </div>
        <div>
                    <label>
                        Video Link :
                        <input
                            type='text'
                            name='username'
                            onChange={handleChange}
                            value={formData.link}
                        />
                    </label>
                </div>
                <span className='uploadMsg'>
                {isUploaded}
                </span>
                <button type='submit' id='subss'>
                    Upload video
                </button>
        </form>
    </div>
  )
}

export default AddVideos