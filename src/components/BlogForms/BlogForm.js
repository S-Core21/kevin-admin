import React, { useEffect } from 'react'
import { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import axios from 'axios';
import './BlogForm.css'

const BlogForm = () => {
    const user = localStorage.getItem('data')
    const [data, setData] = useState(JSON.parse(user))
    const [editorState, setEditorState] = useState()



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

    console.log(formData.tagFive)


    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })

    }

    const body = {
        title: formData.title,
        snippet: formData.snippet,
        image: formData.image,
        author: formData.author,
        categories: formData.categories,
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
        console.log('prevented')
        axios.post('https://blogapi-31c0.onrender.com/api/blogs', body)
            .then(response => {
                console.log('blog added')
                console.log(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

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
                    <label htmlFor='snippet'>
                        Snippet:
                        <input
                            required={true}
                            type='text'
                            name='snippet'
                            value={formData.snippet}
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
                        <input
                            required={true}
                            type='text'
                            name='categories'
                            value={formData.categories}
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
                <button type='submit'>Submit</button>
            </form>
        </div>
        </>
    )
}

export default BlogForm