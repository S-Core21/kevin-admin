import React from "react";
import "./blogFrame.css";
import { Link } from "react-router-dom";
import axios from "axios";

const BlogFrame = (props) => {
  // const encodedUrl = encodeURIComponent(url)
  // const decodeUrl = encodedUrl.replace(/%20/g, '-')
  // const data = {
  //     id: props.id,
  //     img : props.image
  // }

  function deleteBlog() {
    axios
      .delete(`https://blogapi-31c0.onrender.com/blogs/${props.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="blogFrame">
      {/* <Link to={`/${decodeUrl}`} state= {data} > */}
      <main>
        <img alt="blogImage" src={props.image} />
      </main>
      <Link to="/blogs/viewblog" state={props}>
        <article>
          <span className="tags">
            <small>{props.tagOne}</small>
            <small>{props.tagTwo}</small>
            <small>{props.tagThree}</small>
          </span>
          <h1>{props.title}</h1>
          <p>{props.blogSnippet} ...</p>
          <span className="readlength">
            {props.date} - {props.readLength}
          </span>
        </article>
      </Link>
      <span className="edDel">
        <button>
          <Link to="/blog-edit" state={props.id}>
            {" "}
            Edit{" "}
          </Link>{" "}
        </button>
        <button onClick={deleteBlog}>Delete</button>
      </span>
      {/* </Link> */}
    </div>
  );
};

export default BlogFrame;
