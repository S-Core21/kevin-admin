import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './VideoFrame.css'
import axios from 'axios'

const VideoFrame = () => {
    const [videoData, setVideoData] = useState({})

    const videos = ['https://youtube.com/embed/T7pUh8XlGgg', 'https://youtube.com/embed/T7pUh8XlGgg','https://youtube.com/embed/T7pUh8XlGgg', 'https://youtube.com/embed/T7pUh8XlGgg', 'https://youtube.com/embed/T7pUh8XlGgg','https://youtube.com/embed/T7pUh8XlGgg']

    function handleDelete (id){
        axios.delete(`${id}`)
        .then(res=>{
            console.log(res)
            setVideoData(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

  return (
    <div className='videoFrame'>
        {
            videos.map(item =>{
                return <div className='video'> <iframe
                src={item}
                allowFullScreen={true}
                title='Kevin'
                height={200}
                style={{
                    width: '100%'
                }}
                >
                </iframe>
                <p>The Gida story is an experience to learn from and reference</p>
                <span className='ediDel'>
                <button className='del' id='edit'>
                    <Link to='/edit-videos' state={videoData.id}>
                        Edit
                    </Link>
                    
                </button>
                <button className='del' onClick={handleDelete(item)}>
                    Delete 
                </button>
                </span>
                </div>
            })
        }
       </div>
  )
}

export default VideoFrame