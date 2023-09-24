import React, { useEffect } from 'react'
import { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BlogForm.css'

const BlogForm = () => {
    const user = localStorage.getItem('data')
    const [base64, setBase64] = useState('')
    const [data, setData] = useState(JSON.parse(user))
    const [editorState, setEditorState] = useState()
    const [isBlog, setIsBlog] = useState('')
    const [isError, setIsError] = useState('')
    const [selectedValue, setSelectedValue] = useState()
    const [sub, setSub] = useState(true)


    const [formData, setFormData] = useState({
        title: '',
        snippet: '',
        image: '',
        author: data.username,
        categories: '',
        mins: '',
        body: '',
        tagOne: '',
        tagTwo: '',
        tagThree: '',
        tagFour: '',
        tagFive: '',
        tagSix: '',
    })



    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })

    }

    function handleimage(e){
       const file = e.target.files[0]
       const reader = new FileReader();
       reader.onloadend = () =>{
        const convertedString = reader.result;
        setBase64(convertedString)
       }
       reader.readAsDataURL(file)
    }
console.log(base64)

    function handleSelect (e){
        setSelectedValue(e.target.value)
    }


    const body = {
        title: formData.title,
        snippet: formData.snippet,
        image: base64,
        author: formData.author,
        categories: selectedValue,
        readMins: formData.mins,
        body: editorState,
        tagOne: formData.tagOne,
        tagTwo: formData.tagTwo,
        tagThree: formData.tagThree,
        tagFour: formData.tagFour,
        tagFive: formData.tagFive,
        tagSix: formData.tagSix
    }

    function handleSubmit(e) {
        e.preventDefault()
        setSub(false)
        console.log('prevented')
        axios.post('https://blogapi-31c0.onrender.com/api/blogs', body)
            .then(response => {
                console.log('blog added')
                console.log(response.data)
                setIsBlog('Blog added Successfully- View Blog')
                setSub(true)
            })
            .catch(err => {
                console.log(err)
                setSub(true)
                setIsError('Could not upload Blog at the moment')
            })
    }

    useEffect(()=>{
        setSub(true)
    }, [])

    return (
        <>
        <div className='blogForm'>
            <h1>
                Create New Blog
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='title'>
                        Title:
                        <input
                            required={true}
                            type='text'
                            name='title'
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor='image'>
                        Image:
                        <input
                            required={true}
                            type='file'
                            name='image'
                            onChange={handleimage}
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
                            value={formData.snippet}
                            onChange={handleChange}
                            maxLength={50}
                            placeholder='maximum of 50 characters'
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
                            value={formData.tagOne}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor='tag2'>
                        Tag 2:
                        <input
                            required={true}
                            type='text'
                            name='tagTwo'
                            value={formData.tagTwo}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor='tag3'>
                        Tag 3:
                        <input
                            required={true}
                            type='text'
                            name='tagThree'
                            value={formData.tagThree}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor='tag4'>
                        Tag 4:
                        <input
                            type='text'
                            name='tagFour'
                            value={formData.tagFour}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor='tag5'>
                        Tag 5:
                        <input
                            type='text'
                            name='tagFive'
                            value={formData.tagFive}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor='tag6'>
                        Tag 6:
                        <input
                            type='text'
                            name='tagSix'
                            value={formData.tagSix}
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
                            value={formData.author}
                            readOnly = {true}
                            // onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor='categories'>
                        Categories:
                       <select value={selectedValue} onChange={handleSelect}>
                        <option value='Education'>Education</option>
                        <option value='Technology'>Technology</option>
                        <option value='Blockchain'>Blockchain</option>
                        <option value='Cryptocurrency'>Cryptocurrency</option>
                        <option value='Featured'>Featured</option>
                        <option value='Tutorials'>Tutorials</option>
                        <option value='Reviews'>Reviews</option>
                        <option value='Coding/Dev'>Coding/Dev</option>
                        <option value='Productivity'>Productivity</option>
                       </select>
                    </label>
                </div>
                <div>
                    <label htmlFor='mins'>
                        Read Mins:
                        <input
                            required={true}
                            type='text'
                            name='mins'
                            value={formData.mins}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <p className='blogBody'>Body :</p>
                    <ReactQuill
                        value={editorState}
                        onChange={setEditorState}
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
                <strong> <Link to={`https://kevin-blog-three.vercel.app/articles/${formData.title.split('').join('-')}`}>{isBlog}</Link> </strong>
                <strong>{isError}</strong>
                <button type='submit' disabled ={ sub ? false : true} >{sub ? 'Submit' : 'Loading...'}</button>
            </form>
        </div>
        </>
    )
}

export default BlogForm