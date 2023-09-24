import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './VideoFrame.css'
import axios from 'axios'

const VideoFrame = (props) => {
    const [videoDa, setVideoDa] = useState({})
    console.log(props.id, props.title, props.link)

   
    function handleDel (id){
        axios.delete(`https://blogapi-31c0.onrender.com/api/videos/${id}`)
        .then(res=>{
            console.log(res)
            setVideoDa(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

  return (
    <div className='videoFrame'><div className='video' key={props.id} ><iframe
                src={`https://youtube.com/embed/${props.link}`}
                allowFullScreen={true}
                title='Kevin'
                height={200}
                style={{
                    // width: '100%'
                }}
                >
                </iframe>
                <p>{props.title}</p>
                <span className='ediDel'>
                <button className='del' id='edit'>
                    <Link to='/edit-videos' state={{id: props.id, title: props.title, link: props.link}}>
                        Edit
                    </Link>
                    
                </button>
                <button className='del' onClick={()=>{
                    handleDel(props.id)
                }} >
                    Delete 
                </button>
                </span>
                </div>
       </div>
  )
}

export default VideoFrame