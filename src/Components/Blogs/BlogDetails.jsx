import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBlog = async () => {
    try {
      const response = await axios.get(
        `https://coblog-backend.vercel.app/blog/${id}`
      );
      setBlog(response.data);
    } catch (error) {
      console.error("Failed to fetch blog:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (!blog) {
    return <div className="text-center">Blog not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="mb-4">{blog.content}</p>
      <p className="text-gray-600">
        {blog.author_name} - {new Date(blog.created_at).toLocaleDateString()}
      </p>
    </div>
  );
};

export default BlogDetails;
