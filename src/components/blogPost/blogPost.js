import React from 'react'
import BlogFrame from '../blogFrame/blogFrame'
import axios from 'axios'
import Loading from "../../components/Loading/Loading";
import { useState, useEffect } from 'react'
import './blogPost.css'


const BlogPost = () => {

  const baseurl = 'https://blogapi-31c0.onrender.com'
  const [data, setData] = useState()

  useEffect(() => {
    const cachedData = localStorage.getItem('cachedData')
    if (cachedData) {
      const parsedData = JSON.parse(cachedData)
      setData(parsedData)
      console.log('using cache data')
    } else {
      axios.get(`${baseurl}/blogs`)
        .then(response => {
          localStorage.setItem('cacheData', JSON.stringify(response))
          setData(response.data.blogs)
          console.log('data is cached')
        })
        .catch(err => {
          console.log(err)
        })
    }

    // update after 5 mins
    const timer = setTimeout(() => {
      if (cachedData) {
        const parsedData = JSON.parse(cachedData)
        setData(parsedData)
        console.log('using cache data')
      } else {
        axios.get(`${baseurl}/blogs`)
          .then(response => {
            localStorage.setItem('cacheData', JSON.stringify(response))
            setData(response.data.blogs)
            console.log('data is cached')
          })
          .catch(err => {
            console.log(err)
          })
      }
      console.log('data timed out')
    }, 3000)

    // const cachedData3 = localStorage.getItem('cacheData')
    // const newData = JSON.parse(cachedData3)
    // const blogData = newData.data.blogs
    // setData(blogData)

    return () => clearTimeout(timer)

  }, [])


  return (
    <>
      {
        data && <>
          {
            data.map(item => {
              return (
                <div key={item._id} className='blogPost'>
                  <BlogFrame
                    key={item._id}
                    image= {item.image ? item.image : '/images/blog1.png'}
                    date={item.createdAt.slice(0, 10)}
                    tagOne={item.tagOne}
                    tagTwo={item.tagTwo}
                    tagThree={item.tagThree}
                    tagFour={item.tagOne}
                    tagFive={item.tagTwo}
                    tagSix={item.tagThree}
                    title={item.title}
                    body={item.body}
                    blogSnippet={item.snippet}
                    readLength={item.readMins}
                    id={item._id}
                    author={item.author}
                    createdAt={item.createdAt}
                    comments={item.comments}
                  />
                </div>

              )
            })
          }
        </>
      }
      {
        !data && <Loading/>
      }
    </>

  )
}

export default BlogPost