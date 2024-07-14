// src/components/BlogList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogTemplate from "./BlogTemplate";
// Make sure this import exists
import BlogSkeleton from "../Skeletons/BlogSkeleton";
import "./BlogList.css";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [Skelton, setSkelton] = useState(true);

  const blogimage =
    "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "https://coblog-backend.vercel.app/blogs"
      );
      setBlogs(response.data);
      setSkelton(false);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }



  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="container-Bloglist">
      <div className="blog-grid">
        {Skelton
          ? Array.from({ length: 6 }).map((_, index) => (
              <BlogSkeleton key={index} />
            ))
          : blogs.map((blog) => (
              <div key={blog.blog_id}>
                <BlogTemplate
                  authorName={blog.author_name}
                  title={blog.title}
                  text={blog.content}
                  createdOn={blog.created_at}
                  imageUrl={blogimage}
                />
              </div>
            ))}
      </div>
    </div>
  );
};

export default BlogList;
