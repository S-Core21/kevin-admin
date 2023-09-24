import React from 'react'
import VideoFrame from '../../components/VideoFrame/VideoFrame'
import './Videos.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const Videos = () => {
const [videoData, setVideoData] = useState()
    useEffect(()=>{
        axios.get('https://blogapi-31c0.onrender.com/api/all_videos')
        .then(res=>{
            console.log(res.data.video)
            setVideoData(res.data.video)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    console.log(videoData)
    return (
        <>
            {/* <div className='cat' style={{ color: 'white' }}>
                <h1>
                    VIDEOS
                </h1>
            </div> */}
              <h1 style={{ marginLeft:'3rem', fontFamily:'Monts bold', marginTop:'2rem' }}>
                    All Videos 
                </h1>
            <div className='videos'>
                <section>
                    {
                        videoData && videoData.map(item =>{
                            return  <VideoFrame
                                id ={item._id}
                                title = {item.title}
                                link = {item.videoLink}
                            />
                        })
                    }
                    
                </section>
            </div>
        </>

    )
}

export default Videos