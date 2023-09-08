import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import axios from 'axios';

const BlogEdit = () => {

    const [blogdata, setBlogdata] = useState({})
    const location = useLocation()
    const {state} = location
    const [editorstate, setEditorstate] = useState()
    const user = localStorage.getItem('data')
    const [data, setData] = useState(JSON.parse(user))

    
    const [isBlog, setIsBlog] = useState('')
    console.log(state)


    useEffect(()=>{
        axios.get(`https://blogapi-31c0.onrender.com/blogs/${state}`)
        .then(response => {
            console.log('blog added')
            console.log(response.data.blog)
            setBlogdata(response.data.blog)
            // setIsBlog('Blog edited Successfully')
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    useEffect(()=>{
        setEditorstate(blogdata.body)
    }, [blogdata])

    // const [formData, setFormData] = useState({
    //     title: blogdata.title,
    //     snippet: blogdata.snippet,
    //     image: blogdata.image,
    //     author: data.username,
    //     categories: blogdata.categories,
    //     mins: blogdata.readMins,
    //     body: blogdata.body,
    //     tagOne: blogdata.tagOne,
    //     tagTwo: blogdata.tagTwo,
    //     tagThree: blogdata.tagThree,
    //     tagFour: blogdata.tagFour,
    //     tagFive: blogdata.tagFive,
    //     tagSix: blogdata.tagSix,
    // })

    // console.log(formData.tagFive)


    function handleChange(e) {
        setBlogdata({
            ...blogdata,
            [e.target.name]: e.target.value,
        })

    }

    const updatedBlog = {
        id: state,
        title: blogdata.title,
        snippet: blogdata.snippet,
        image: blogdata.image,
        author: blogdata.author,
        categories: blogdata.categories,
        readMins: blogdata.mins,
        body: editorstate,
        tagOne: blogdata.tagOne,
        tagTwo: blogdata.tagTwo,
        tagThree: blogdata.tagThree,
        tagFour: blogdata.tagFour,
        tagFive: blogdata.tagFive,
        tagSix: blogdata.tagSix
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log('prevented')
        axios.put(`https://blogapi-31c0.onrender.com/api/blogs/${state}`, updatedBlog)
            .then(response => {
                console.log('blog added')
                console.log(response.data)
                setBlogdata(response.data)
                setIsBlog('Blog edited Successfully')
            })
            .catch(err => {
                console.log(err)
            })
    }

  

    console.log(blogdata)

  return (
    <>
    {
        blogdata._id &&  <div className='blogForm'>
        <h1>
            Edit Blog
        </h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='title'>
                    Title:
                    <input
                        required={true}
                        type='text'
                        name='title'
                        value={blogdata.title}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label htmlFor='snippet'>
                    Snippet:
                    <input
                        required={true}
                        type='text'
                        name='snippet'
                        value={blogdata.snippet}
                        onChange={handleChange}
                        placeholder='maximum of 200 characters'
                    />
                </label>
            </div>
            <div className='tags'>
                <label htmlFor='tag1'>
                    Tag 1:
                    <input
                        required={true}
                        type='text'
                        name='tagOne'
                        value={blogdata.tagOne}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor='tag2'>
                    Tag 2:
                    <input
                        required={true}
                        type='text'
                        name='tagTwo'
                        value={blogdata.tagTwo}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor='tag3'>
                    Tag 3:
                    <input
                        required={true}
                        type='text'
                        name='tagThree'
                        value={blogdata.tagThree}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor='tag4'>
                    Tag 4:
                    <input
                        type='text'
                        name='tagFour'
                        value={blogdata.tagFour}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor='tag5'>
                    Tag 5:
                    <input
                        type='text'
                        name='tagFive'
                        value={blogdata.tagFive}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor='tag6'>
                    Tag 6:
                    <input
                        type='text'
                        name='tagSix'
                        value={blogdata.tagSix}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label htmlFor='author'>
                    Author:
                    <input
                        required={true}
                        type='text'
                        name='author'
                        value={blogdata.author}
                        readOnly = {true}
                        // onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label htmlFor='categories'>
                    Categories:
                    <input
                        required={true}
                        type='text'
                        name='categories'
                        value={blogdata.categories}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label htmlFor='mins'>
                    Read Mins:
                    <input
                        required={true}
                        type='text'
                        name='mins'
                        value={blogdata.readMins}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <p className='blogBody'>Body :</p>
                <ReactQuill
                    value={editorstate}
                    onChange={setEditorstate}
                    modules={{
                        toolbar: [
                            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                            ['bold', 'italic', 'underline', 'strike'],
                            ['link', 'image', 'video'],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                            ['blockquote', 'code-block'],
                            [{ 'script': 'sub' }, { 'script': 'super' }],
                            [{ 'indent': '-1' }, { 'indent': '+1' }],
                            [{ 'direction': 'rtl' }],
                            [{ 'size': ['small', false, 'large', 'huge'] }],
                            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                            [{ 'color': [] }, { 'background': [] }],
                            [{ 'font': [] }],
                            [{ 'align': [] }],
                            ['clean']
                        ]
                    }}
                />
            </div>
            <strong>{isBlog}</strong>
            <button type='submit'>Submit</button>
        </form>
    </div>
    }
    
    </>
  )
}

export default BlogEdit