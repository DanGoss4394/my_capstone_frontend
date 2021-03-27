import React, { useContext } from "react";
import BlogContext from "../contexts/BlogContext";

const Home = () => {
  const { blogs } = useContext(BlogContext);

  const renderBlogs = () => {
    return blogs.map((blog) => {
      return (
        <div>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
        </div>
      );
    });
  };

  return (
    <div className="home_container">
      <div className="heading">
        <h1>Home</h1>
      </div>
      <div className="home_wrapper">
        <div className="blogs">{renderBlogs()}</div>
      </div>
    </div>
  );
};
export default Home;
