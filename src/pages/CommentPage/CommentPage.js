import React from 'react'
import './CommentPage.css'
import Comments from '../../components/Comments/Comments'

const CommentPage = () => {
  return (
    <div className='commentPage'>
        <h1>
        CommentPage
        </h1>
        <div>
            {Comments}
        </div>
    </div>
  )
}

export default CommentPage