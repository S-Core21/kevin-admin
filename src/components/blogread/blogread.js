import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './blogread.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'


const BlogRead = () => {

    const location = useLocation()
    const { state } = location
    const blogId = state

    console.log(blogId)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    const baseurl = 'https://blogapi-31c0.onrender.com'
    const [data, setData] = useState()


    const [replyData, setReplyData] = useState({
        id: '',
        reply: '',
        replier: blogId.author,
    })

    console.log(replyData)




    function handleChange(e){
        setReplyData({
            ...replyData,
            [e.target.name] : e.target.value
        })
    }

    const handleItemClick = (item) => () => { // Return a function that updates state
        setReplyData(prevState => ({
            ...prevState,
            id: item
        }));
    };

    const replyInfo ={
        replier: replyData.replier,
        text: replyData.reply
    }

    const [posted, setPosted] = useState(false)
    

    function submitReply(e){
        e.preventDefault()
        axios.post(`https://blogapi-31c0.onrender.com/blogs/${blogId.id}/comments/${replyData.id}/reply`, replyInfo)
        .then(res=>{
            console.log(res)
            setPosted(true)
            setTimeout(() => {
                setPosted(false);
              }, 2000);
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        <div>
            {
                blogId && <>
                    <section className='blogread'>
                        <h1 className='bread_title'>
                            {blogId.title}
                        </h1>
                        <div className='top'>
                            <div className='bread_date'>
                                <img alt='author' src='/images/kevin1.png' className='authorIcon' />
                                <span>  Published by <b>
                                    {blogId.author} <br /> {blogId.createdAt.slice(0, 10)}  </b>- {blogId.readMins}</span>
                            </div>
                            <br />
                            <div className='bread_customTags'>
                                <ul>
                                    {blogId.tagOne &&
                                        <li>{blogId.tagOne}</li>
                                    }
                                    {blogId.tagTwo &&
                                        <li>{blogId.tagTwo}</li>
                                    }
                                    {blogId.tagThree &&
                                        <li>{blogId.tagThree}</li>
                                    }
                                    {blogId.tagFour &&
                                        <li>{blogId.tagFour}</li>
                                    }
                                    {blogId.tagFive &&
                                        <li>{blogId.tagFive}</li>
                                    }
                                    {blogId.tagSix &&
                                        <li>{blogId.tagSix}</li>
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
                            <img alt='blog_imgae' src={blogId.image} className='himg' />
                            
                        </div>
                        <article className='blog_article'>
                            <div className='blog_body'>{<ReactQuill value={blogId.body} readOnly={true} modules={{ toolbar: false }} />}</div>
                        </article>
                        <span className='bread_customTags'>
                            <ul>
                            {blogId.tagOne &&
                                        <li>{blogId.tagOne}</li>
                                    }
                                    {blogId.tagTwo &&
                                        <li>{blogId.tagTwo}</li>
                                    }
                                    {blogId.tagThree &&
                                        <li>{blogId.tagThree}</li>
                                    }
                                    {blogId.tagFour &&
                                        <li>{blogId.tagFour}</li>
                                    }
                                    {blogId.tagFive &&
                                        <li>{blogId.tagFive}</li>
                                    }
                                    {blogId.tagSix &&
                                        <li>{blogId.tagSix}</li>
                                    }
                            </ul>
                        </span>
                        <div className='braed_author'>
                            <h2>Published by:</h2>
                            <img alt='' className='authorImg' src='/images/kevin1.png' />
                            <h3>{blogId.author}</h3>
                        </div>
                        <div className='rcomments'>
                            <h1>
                                Recent comments 
                            </h1>
                            <main>
                                {
                                    blogId.comments && blogId.comments.map((item, index)=>{
                                        return <ul key={item._id}>
                                        <li>{item.commenter} </li>
                                        <li>{item.text}</li>
                                        <span className='all_repleis_con'>
                                            {
                                                item.replies.map(item=>{
                                                  return <ul key={item._id} className='all_replies'>
                                                        <li>{item.replier}</li>
                                                        <li>{item.text}</li>
                                                    </ul>
                                                })
                                            }
                                        </span>
                                        <form className='replies' onSubmit={submitReply} onClick={handleItemClick(item._id)}>
                                        <textarea
                                                type='text'
                                                placeholder='Leave a reply'
                                                value={replyData.id === item._id ? replyData.reply : ''}
                                                onChange={handleChange}
                                                name='reply' 
                                                
                                            />
                                            <button type='submit'><img alt='send' src='/images/send.png' className='send_replies'/></button>
                                        </form>
                                        {posted ?<span className="commNot">Reply Sent</span> : ''}
                                    </ul>
                                      })
                                }
                                
                            </main>
                        </div>
                        {/* <form className='comment'>
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
                        </form> */}
                    </section>
                </>
            }
        </div>
    )
}

export default BlogRead