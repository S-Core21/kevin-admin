import React from 'react'
import VideoFrame from '../../components/VideoFrame/VideoFrame'
import './Videos.css'

const Videos = () => {
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
                    <VideoFrame />
                </section>
            </div>
        </>

    )
}

export default Videos