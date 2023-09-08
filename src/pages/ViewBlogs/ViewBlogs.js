import React from 'react'
import BlogPost from '../../components/blogPost/blogPost'
import './ViewBlogs.css'

const ViewBlogs = () => {
  return (
    <div className='ViewBlogs'>
        <h1 className='tt'>
            All Blogs
        </h1>
        <small className='del'>Deleting a Blog takes at least 60secs</small>
        <section>
        <BlogPost/>
        </section>
        <span></span>
    </div>
  )
}

export default ViewBlogs