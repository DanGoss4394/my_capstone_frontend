import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import BlogContext from "../contexts/BlogContext";

const Home = () => {
  const { blogs, removeBlog } = useContext(BlogContext);
  const { userId, loggedInStatus } = useContext(AuthContext);

  const BlogStyles = {
    border: "2px solid #000",
    background: "#c4cad0",
  };

  const renderBlogs = () => {
    return blogs.map((blog) => {
      return (
        <div key={blog.id} style={BlogStyles}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <button>Comment</button>
          {userId === blog.user_id && (
            <button onClick={() => {removeBlog(blog.id)}}>Remove</button>
          )}
        </div>
      );
    });
  };

  if (loggedInStatus === "LOGGED_IN") {
    return (
      <div className="home_container_wrapper">
        <div className="left_column">
          <h1>Followers</h1>
        </div>
        <div className="middle_column">
          <div className="blogs">{renderBlogs()}</div>
        </div>
        <div className="right_column">
          <h1>Schedule</h1>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/auth" />;
  }
};
export default Home;
