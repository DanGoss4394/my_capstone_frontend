import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import AuthContext from "../contexts/AuthContext";
import BlogContext from "../contexts/BlogContext";
import { API_URL } from "../../api/api";

const Profile = () => {
  const [username, setUserName] = useState("");

  const { blogs, removeBlog } = useContext(BlogContext);
  const { userId } = useContext(AuthContext);

  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: `https://secure.gravatar.com/xmlrpc?user=[email_hash]`,
  //     withCredentials: true,
  //   })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}v1/get_user/${username}`,
    })
      .then((res) => {
        setUserName(res.data.username);
      })
      .catch((err) => console.log(err));
  }, [username]);

  const renderBlogs = () => {
    return blogs
      .filter((blog) => userId === blog.user_id)
      .map((blog) => {
        return (
          <div key={blog.id} style={BlogStyles}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
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
