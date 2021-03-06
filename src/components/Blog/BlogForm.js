import React, { useState, useContext } from "react";
import axois from "axios";
import { useHistory } from "react-router-dom";

import { API_URL } from "../../api/api";
import AuthContext from "../contexts/AuthContext";
import BlogContext from "../contexts/BlogContext";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  // const [videoTitle, setVideoTitle] = useState("");
  const [content, setContent] = useState("");
  // const [description, setDescription] = useState("");

  const { handleAddBlog } = useContext(BlogContext);
  const { userId } = useContext(AuthContext);
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axois({
      method: "post",
      url: `${API_URL}v1/blog`,
      data: {
        title,
        content,
        user_id: userId,
      },
      withCredentials: true,
    })
      .then((res) => {
        handleAddBlog(res.data);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="blog-content-wrapper">
        <div className="blog_adder">
          <div className="heading">
            <h1>Blog Entery</h1>
          </div>
          <div className="inputfield">
            <div className="title">
              <input
                required
                type="text"
                name="title"
                placeholder="Title.."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="content">
              <textarea
                required
                type="text"
                name="content"
                placeholder="Content.."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <button type="submit" className="btn">
              Submit Blog
            </button>
          </div>
        </div>

        {/* <div className="video">
          <div className="heading">
            <h1>Add a Video</h1>
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
              <textarea
                type="text"
                name="description"
                placeholder="Description.."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button type="submit" className="btn">
              Submit Video
            </button>
          </div>
        </div> */}
      </form>
    </div>
  );
};

export default BlogForm;
