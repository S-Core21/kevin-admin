import React from 'react'
import './VideoFrame.css'
import axios from 'axios'

const VideoFrame = () => {

    const videos = ['https://youtube.com/embed/T7pUh8XlGgg', 'https://youtube.com/embed/T7pUh8XlGgg','https://youtube.com/embed/T7pUh8XlGgg', 'https://youtube.com/embed/T7pUh8XlGgg', 'https://youtube.com/embed/T7pUh8XlGgg','https://youtube.com/embed/T7pUh8XlGgg']

    function handleDelete (id){
        axios.delete(`${id}`)
        .then(res=>{
            console.log(res)
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
                <button className='del' onClick={handleDelete(item)}>
                    Delete 
                </button>
                </div>
            })
        }
       </div>
  )
}

export default VideoFrame