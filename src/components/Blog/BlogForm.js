import React, { useState, useContext } from "react";
import axois from "axios";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axois({
      method: "post",
      url: `http://localhost:5000/api/v1/blog}`,
      data: {
        title,
        content,
      },
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onClick={handleSubmit} className="blog-content-wrapper">
        <div className="blog_adder">
          <div className="heading">
            <h1>Blog Entery</h1>
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
              Submit Blog
            </button>
          </div>
        </div>

        <div className="video">
          <div className="heading">
            <h1>Add a Video</h1>
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
              Submit Video
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
