import React, { useContext } from "react";

import { Link } from "react-router-dom";

import AuthContext from "../contexts/AuthContext";
import BlogContext from "../contexts/BlogContext";

const Profile = () => {
  const { blogs, removeBlog } = useContext(BlogContext);
  const { userId, username } = useContext(AuthContext);

  const renderBlogs = () => {
    return blogs
      .filter((blog) => userId === blog.user_id)
      .map((blog) => {
        return (
          <div key={blog.id} style={BlogStyles}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <button>Comment</button>
            <button onClick={() => removeBlog(blog.id)}>Remove</button>
            <Link to={`/edit-blog/${blog.id}`}>Edit</Link>
          </div>
        );
      });
  };

  const BlogStyles = {
    border: "2px solid #000",
    background: "#c4cad0",
  };
  return (
    <div className="profile_container_wrapper">
      <div className="left_column">
        <div className="left_top">
          <h1>Picture</h1>
        </div>
        <div className="left_bottom">
          <h1>about section</h1>
        </div>
      </div>
      <div className="middle_column">
        <div className="top_middle">
          <h1>Welcome Home {username}</h1>
        </div>
        <div className="bottom_middle">
          <div className="blogs">{renderBlogs()}</div>
        </div>
      </div>
      <div className="right_column">
        <div className="top_right_column">
          <h1>followers</h1>
        </div>
        <div className="bottum_right_column">
          <h1>schedule</h1>
        </div>
      </div>
    </div>
  );
};
export default Profile;
