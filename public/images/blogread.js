import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import TopNav from '../../components/topNav/TopNav'
import Tags from '../../components/tags/tags'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './blogread.css'
import Footer from '../../components/footer/footer'
import ReadMore from '../../components/ReadMore/ReadMore'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'


const BlogRead = () => {

    const location = useLocation()
    const { state } = location
    const blogId = state

    console.log(blogId.id)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    const baseurl = 'https://blogapi-31c0.onrender.com'
    const [data, setData] = useState()
    const [authorInfo, setAuthorInfo] = useState()

    const [commentData, setCommentData] = useState({
        comment: '',
        name: '',
        email:''
    })

    useEffect(() => {
        axios.get(`${baseurl}/blogs/${blogId.id}`)
            .then(response => {
                setData(response.data.blog)
            })
            .catch(err => {
                console.log(err)
            })
    }, [blogId.id])

    console.log(data)
    // const blogBody = data.body.editorState


    const author = data ? data.author : ''
    const authorUrl = encodeURIComponent(author)
    const decodedurl = authorUrl.replace(/%20/g, '-')


    useEffect(()=>{
        axios.get('https://blogapi-31c0.onrender.com/admin_dashboard/users')
        .then(response => {
          setAuthorInfo(response.data.users)
          console.log(response.data.users)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])
    console.log(authorInfo)

    const authorSocials = authorInfo ? authorInfo.filter(item => item.username === author) : ''

    function handleChange(e){
        setCommentData({
            ...commentData,
            [e.target.name] : e.target.value
        })
    }

    const commenInfo ={
        blogId: blogId.id, 
        comments: {
        commenter: commentData.name,
        text: commentData.comment
    }}
    console.log(commenInfo.commenter)
    function submitComment(e){
        e.preventDefault()
        axios.post(`https://blogapi-31c0.onrender.com/blogs/${blogId.id}/comments`, commenInfo)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        <div>
            {
                data && <>
                    <Tags />
                    <section className='blogread'>
                        <h1 className='bread_title'>
                            {data.title}
                        </h1>
                        <div className='top'>
                            <div className='bread_date'>
                                <img alt='author' src='/images/kevin1.png' className='authorIcon' />
                                <span>  Published by <b><Link to={`/articles/authors/${decodedurl}`}
                                    state={data.author} >{data.author}</Link> <br /> {data.createdAt.slice(0, 10)}  </b>- {data.readMins}</span>
                            </div>
                            <br />
                            <div className='bread_customTags'>
                                <ul>
                                    {data.tagOne &&
                                        <li>{data.tagOne}</li>
                                    }
                                    {data.tagTwo &&
                                        <li>{data.tagTwo}</li>
                                    }
                                    {data.tagThree &&
                                        <li>{data.tagThree}</li>
                                    }
                                    {data.tagFour &&
                                        <li>{data.tagFour}</li>
                                    }
                                    {data.tagFive &&
                                        <li>{data.tagFive}</li>
                                    }
                                    {data.tagSix &&
                                        <li>{data.tagSix}</li>
                                    }
                                </ul>
                            </div>
                            <div className='share_socials'>
                                <h3>Share this: </h3>
                                <span>
                                    <Link>
                                        <img alt='icons' src='/images/icons8-facebook-48.png' />
                                    </Link>
                                    <Link>
                                        <img alt='icons' src='/images/icons8-twitter-48.png' />
                                    </Link>
                                    <Link>
                                        <img alt='icons' src='/images/icons8-linkedin-48.png' />
                                    </Link>
                                    <Link>
                                        <img alt='icons' src='/images/icons8-telegram-48.png' />
                                    </Link>
                                    <Link>
                                        <img alt='icons' src='/images/icons8-instagram-48.png' />
                                    </Link>
                                    <Link>
                                        <img alt='icons' src='/images/icons8-link-50.png' />
                                    </Link>
                                </span>
                            </div>
                            <br />
                            <img alt='blog_imgae' src={blogId.img} className='himg' />
                            
                        </div>
                        <article className='blog_article'>
                            <div className='blog_body'>{<ReactQuill value={data.body} readOnly={true} modules={{ toolbar: false }} />}</div>
                        </article>
                        <span className='bread_customTags'>
                            <ul>
                            {data.tagOne &&
                                        <li>{data.tagOne}</li>
                                    }
                                    {data.tagTwo &&
                                        <li>{data.tagTwo}</li>
                                    }
                                    {data.tagThree &&
                                        <li>{data.tagThree}</li>
                                    }
                                    {data.tagFour &&
                                        <li>{data.tagFour}</li>
                                    }
                                    {data.tagFive &&
                                        <li>{data.tagFive}</li>
                                    }
                                    {data.tagSix &&
                                        <li>{data.tagSix}</li>
                                    }
                            </ul>
                        </span>
                        <div className='braed_author'>
                            <h2>Published by:</h2>
                            <img alt='' className='authorImg' src='/images/kevin1.png' />
                            <h3>{data.author}</h3>
                            <p>
                                <Link
                                    to={`/articles/authors/${decodedurl}`}
                                    state={data.author}
                                >
                                    See author's posts
                                </Link>
                            </p>
                            <span className='author_socials'>
                                {
                                    authorSocials && 
                                    authorSocials.map(item=>{
                                        return <span key={item._id}>
                                         <Link to={`https://google.com/${item.twitterId}`} target='_blank'>
                                        <img alt='icons' src='/images/icons8-twitter-48.png' />
                                    </Link>
                                    <Link to={`https://google.com/${item.linkedInId}`}>
                                        <img alt='icons' src='/images/icons8-linkedin-48.png' />
                                    </Link>
                                    </span>
                                    })
                                }
                               
                            </span>
                        </div>
                        <div className='rcomments'>
                            <h1>
                                Recent comments 
                            </h1>
                            <main>
                                {
                                    data.comments && data.comments.map(item=>{
                                        return <ul>
                                        <li>{item.commenter} </li>
                                        <li>{item.text}</li>
                                    </ul>
                                    })
                                }
                                
                            </main>
                        </div>
                        <form className='comment'>
                                <h1>
                                    Leave a reply 
                                </h1>
                                <main>
                                    <div>
                                        <label>
                                            Comment: 
                                            <textarea
                                                type='text'
                                                placeholder='Leave your comment'
                                                value={commentData.comment}
                                                onChange={handleChange}
                                                name='comment' 
                                            />
                                        </label>
                                    </div>
                                    <div>
                                    <label>
                                            Name: 
                                            <input
                                                type='text'
                                                placeholder='Fullname'
                                                value={commentData.name}
                                                onChange={handleChange}
                                                name='name' 
                                            />
                                        </label>
                                    <label>
                                            Email: 
                                            <input
                                                type='text'
                                                placeholder='Email'
                                                value={commentData.email}
                                                onChange={handleChange}
                                                name='email' 
                                            />
                                        </label>
                                    </div>
                                </main>
                                <button onClick={submitComment}>Post comment</button>
                        </form>
                        <div>
                        <h1 className='otherReadsHeader'>
                                Related Articles
                            </h1>
                            <hr/>
                        <div className='otherReads'>
                            
                            <ReadMore category={data.categories} />
                        </div>
                        </div>
                    </section>
                    <Footer />
                </>
            }
        </div>
    )
}

export default BlogRead