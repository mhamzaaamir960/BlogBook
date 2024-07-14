// src/components/Create.jsx
import React from "react";
import CreateNewBlog from "../Components/Blogs/CreateNewBlog";
import backIcon from "../assets/icons/back.png";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import "../Stylesheets/Create.css";

const Create = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // This navigates back to the previous page
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  // const ipResponse = await axios.get("https://api.ipify.org?format=json");
  // const ip_address = ipResponse.data;

  // setError("");

  //   try {
  //     const response = await axios.post(
  //       // "https://coblog-backend.vercel.app/postblog",
  //       "https://localhost:3000/postblog",
  //       {
  //         title,
  //         content,
  //         author_name: name,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     console.log("Blog created successfully:", response.data);
  //     navigate("/");
  //   } catch (error) {
  //     console.error("Failed to create blog:", error.message);
  //   }

  //   console.log(`Name: ${name}, Title: ${title}, Content: ${content}`);

  return (
    <div className="body-Create">
      <div className="create-header">
        <div className="back-button" onClick={handleBackClick}>
          <img src={backIcon} alt="Back" />
          <span>Back</span>
        </div>

        {/* <button className="post-button" onClick={handleSubmit}>
          Post Blog
        </button> */}
      </div>

      <div className="content-container">
        <CreateNewBlog></CreateNewBlog>
      </div>
    </div>
  );
};

export default Create;
