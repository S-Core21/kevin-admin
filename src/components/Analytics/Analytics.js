import React from 'react'
import './analytics.css'

const Analytics = () => {
    // const blogLen = localStorage.getItem('cacheData')
    // const blog = JSON.parse(blogLen)
    // const blogAmt = blog.data.blogs.length
    // console.log()
    return (
        <div className='analytics'>
            <h1>
                Analytics
            </h1>
            <main>
                <ul>
                    <li><img alt='img' src='/images/blogImg.png'/><h2>Blogs</h2><span>100</span></li>
                    <li><img alt='img' src='/images/users.png'/><h2>Users</h2><span>100</span></li>
                    <li><img alt='img' src='/images/subs.png'/><h2>Subscribers</h2><span>100</span></li>
                    <li><img alt='img' src='/images/visit.png'/><h2>Visits</h2><span>100</span></li>
                </ul>
            </main>
        </div>
    )
}

export default Analytics