import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
  let { blogId } = useParams();

  return (
    <div className="blog">
      <h1>blog for {blogId}</h1>
    </div>
  );
};

export default Blog;
