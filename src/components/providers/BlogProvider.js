import React, { useState, useEffect } from "react";
import axios from "axios";

import BlogContext from "../contexts/BlogContext";
import { API_URL } from "../../api/api";

const BlogProvider = (props) => {
  const [blogs, setBlogs] = useState([]);

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
  };

  return (
    <BlogContext.Provider value={state}>{props.children}</BlogContext.Provider>
  );
};

export default BlogProvider;
