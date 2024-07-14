import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserHead from "../PostComponents/UserHead";
import "../../Stylesheets/CreateNewBlog.css";

// function CreateNewBlog () => {

  function CreateNewBlog  () {

  const [name, setName] = useState("Anonymous");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  
  const navigate = useNavigate();

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const ipResponse = await axios.get("https://api.ipify.org?format=json");
    // const ip_address = ipResponse.data;

    setError("");
    // console.log("Title:", title.length);
    // console.log("Content:", content.length);

    if (title.length == 0) {
      setError("Title cannot be empty");
      return;
    }
    if (content.length == 0) {
      setError("Content cannot be empty");
      return;
    }

    try {
      const response = await axios.post(
        "https://coblog-backend.vercel.app/postblog",
        // "http://localhost:3000/postblog",
        {
          title,
          content,
          author_name: name,
          // ip_address,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Blog created successfully:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Failed to create blog:", error.message);
      setError(error.message);
    }

    console.log(`Name: ${name}, Title: ${title}, Content: ${content}`);
  };

  return (
    <section className="creatNew-container">
      <div className="container-create-new-blog">
        <UserHead></UserHead>

        <form onSubmit={handleSubmit} className="form">
          <div className="input-box">
            <label htmlFor="blogTitle" className="create-blog-Labels">
              Blog Title
            </label>
            <input
              type="text"
              id="blogTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Write the title of your blog"
              className="Blog-title-input"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="message" className="create-blog-Labels">
              Blog Content
            </label>
            <textarea
              id="message"
              rows="6"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="Blog-Body-input"
              placeholder="Share your thoughts with the world"
              required
            ></textarea>
          </div>
          {error && <div className="Error">{error}</div>}
          <div className="Post-section-btn">
            <button
              type="submit"
              className="Post-btn-blog"
              onClick={handleSubmit}
            >
              Post Blog
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateNewBlog;
