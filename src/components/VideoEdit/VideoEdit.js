import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const VideoEdit = () => {
    const location = useLocation()
    const {state} = location
    const id = state 

    const [isEdited, setIsEdited] = useState('')
    const [formData, setFormData] = useState({})

    useEffect(()=>{
        axios.get(`https://blogapi-31c0.onrender.com/blogs/${id}`)
        .then(response => {
            console.log('blog added')
            console.log(response.data)
            setFormData(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

   
    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const body ={
        id,
        title: formData.title,
        link: formData.link
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log('prevented')
        axios.put(`https://blogapi-31c0.onrender.com/${id}`, body)
            .then(response => {
                console.log('Video Edited')
                console.log(response.data)
                setIsEdited('VIDEO UPLOADED')
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(()=>{
        setIsEdited('')
    },[])


  return (
    <div className='profile'>
        <h2>
           Edit Video 
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
                {isEdited}
                </span>
                <button type='submit' id='subss'>
                    Upload Changes
                </button>
        </form>
    </div>
  )
}

export default VideoEdit