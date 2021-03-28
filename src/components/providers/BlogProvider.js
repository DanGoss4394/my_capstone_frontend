import React, { useState, useEffect } from "react";
import axios from "axios";

import BlogContext from "../contexts/BlogContext";
import { API_URL } from "../../api/api";

const BlogProvider = (props) => {
  const [blogs, setBlogs] = useState([]);

  const removeBlog = (id) => {
    axios({
      method: "delete",
      url: `${API_URL}v1/delete_blog/${id}`,
    })
      .then((res) => {
        const filteredBlogs = blogs.filter((blog) => id !== blog.id);
        setBlogs(filteredBlogs);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const editBlog = (id, title, content) => {
    axios({
      method: "patch",
      url: `${API_URL}v1/edit_blog/${id}`,
      data: {
        title,
        content,
      },
    })
      .then((res) => {
        const filteredBlogs = blogs.filter((blog) => blog.id !== res.data.id);
        setBlogs([res.data, ...filteredBlogs]);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}v1/get_all_blogs`,
    })
      .then((res) => {
        setBlogs(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const state = {
    blogs,
    setBlogs,
    removeBlog,
    editBlog,
  };

  return (
    <BlogContext.Provider value={state}>{props.children}</BlogContext.Provider>
  );
};

export default BlogProvider;
