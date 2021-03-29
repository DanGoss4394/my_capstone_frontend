import React, { useContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { API_URL } from "../../api/api";
import { useState } from "react";
import BlogContext from "../contexts/BlogContext";
import AuthContext from "../contexts/AuthContext";

const PublicProfile = () => {
  const [user, setUser] = useState({});

  const { blogs } = useContext(BlogContext);
  const { userId } = useContext(AuthContext);

  let { username } = useParams();

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}v1/get_user/${username}`,
    })
      .then((res) => {
        console.log(res);

        if (res.data !== "Username NOT found") {
          setUser(res.data);
        } else {
          setUser({});
        }
      })

      .catch((err) => console.log(err));
  }, [username]);

  const renderBlogs = () => {
    return blogs
      .filter((blog) => userId === blog.user_id)
      .map((blog) => {
        return (
          <div key={blog.id}>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
          </div>
        );
      });
  };

  return (
    <div>
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
          <div className="blogs">{renderBlogs(user)}</div>
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
    </div>
  );
};

export default PublicProfile;
