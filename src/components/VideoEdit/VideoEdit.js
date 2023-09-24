import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const VideoEdit = () => {
    const location = useLocation()
    const {state} = location
    const id = state 
    console.log(id)

    const [isEdited, setIsEdited] = useState('')
    const [formData, setFormData] = useState({
        title : id.title,
        link : id.link
    })

  

   
    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const body ={
        id: id.id,
        title: formData.title,
        videoLink: formData.link
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log('prevented')
        axios.put(`https://blogapi-31c0.onrender.com/api/videos/${id.id}`, body)
            .then(response => {
                console.log('Video Edited')
                console.log(response.data)
                setIsEdited('Video Edited')
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
                            name='title'
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
                            name='link'
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