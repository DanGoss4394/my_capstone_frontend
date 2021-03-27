import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import BlogContext from "../contexts/BlogContext";

const Profile = () => {
  const { blogs, removeBlog } = useContext(BlogContext);
  const { userId } = useContext(AuthContext);

  const renderBlogs = () => {
    return blogs
      .filter((blog) => userId === blog.user_id)
      .map((blog) => {
        return (
          <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <button onClick={() => removeBlog(blog.id)}>Remove</button>
          </div>
        );
      });
  };
  return (
    <div className="profile_container_wrapper">
      <div className="left_column">
        <h1>Profile page</h1>
      </div>
      <div className="middle_column">
        <div className="blogs">{renderBlogs()}</div>
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
