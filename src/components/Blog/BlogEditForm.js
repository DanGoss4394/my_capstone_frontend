import React, { useState, useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import BlogContext from "../contexts/BlogContext";

const BlogEditForm = () => {
  const [title, setTitle] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");

  const { blogs, editBlog } = useContext(BlogContext);
  let { blogId } = useParams();
  let history = useHistory();

  useEffect(() => {
    let blog = blogs.filter((blog) => blog.id === +blogId)[0];
    setTitle(blog.title);
    setContent(blog.content);
  }, [blogId, blogs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editBlog(+blogId, title, content);
    history.push("/profile");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="blog-content-wrapper">
        <div className="blog_adder">
          <div className="heading">
            <h1>Edit Blog</h1>
          </div>
          <div className="inputfield">
            <div className="title">
              <input
                type="text"
                name="title"
                placeholder="Title.."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="content">
              <input
                type="text"
                name="content"
                placeholder="Content.."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <button type="submit" className="btn">
              Edit Blog
            </button>
          </div>
        </div>

        <div className="video">
          <div className="heading">
            <h1>Edit Video</h1>
          </div>
          <div className="inputfield">
            <div className="title">
              <input
                type="text"
                name="title"
                placeholder="Title.."
                value={videoTitle}
                onChange={(e) => setVideoTitle(e.target.value)}
              />
            </div>
            <div className="description">
              <input
                type="text"
                name="description"
                placeholder="Description.."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button type="submit" className="btn">
              Edit Video
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BlogEditForm;
