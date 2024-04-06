import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Blog.css";
function Blog(props) {
  const { dataBlogs } = props;
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    const detailBlog = dataBlogs.find((data) => data.id === parseInt(id));
    setTitle(detailBlog.title);
    setImage(detailBlog.image_url);
    setContent(detailBlog.content);
    setAuthor(detailBlog.author);
  }, []);
  return (
    <>
      <div className="container">
        <div className="warp-blog-content">
          <h1>{title}</h1>
          <img src={image} alt="" />
          <p className="content">{content}</p>
          <p className="author">Author : {author}</p>
        </div>
      </div>
    </>
  );
}

export default Blog;
