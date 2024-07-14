// src/components/BlogTemplate.jsx
import React, { useState } from "react";
import "./BlogTemplate.css";
import { useNavigate } from "react-router-dom";
import likeIcon from "./Icons/like.png";

import commentIcon from "./Icons/comment.png";
import shareIcon from "./Icons/share.png";
import saveicon from "./Icons/Save.png";
import UserHead from "../PostComponents/UserHead";
import Modal from "../Modal/Modal";

const BlogTemplate = ({
  title,
  text = "",
  imageUrl,
  authorName,
  createdOn,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const Navigate = useNavigate();


  const openModal = () => {
    setShowModal(true);
  };

  







  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };



  const renderText = () => {
    if (isExpanded) {
      return text;
    }
    return text.length > 100 ? text.substring(0, 100) + "..." : text;
  };

  const commentclick = () => {
    Navigate("/Comments", {
      state: { title, text, imageUrl, authorName, createdOn },
    });
  };

  return (
    <div className="blog-card">
      <UserHead name={authorName} createdOn={createdOn}></UserHead>
      <h2 className="blog-title">{title}</h2>
      <p className="blog-content">{renderText()}</p>
      {text.length > 100 && (
        <button onClick={toggleText} className="read-more-btn">
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
      {imageUrl && <img src={imageUrl} alt={title} className="blog-image" />}
      <div className="blog-actions">
        <div className="Btns-box">
          <div className="action-btn-box">
            <img src={likeIcon} alt="Like" className="action-icon" />
          </div>
          <div className="action-btn-box"  onClick={commentclick}>
            <img
              src={commentIcon}
              alt="Comment"
              className="action-icon"
             
            />
          </div>
          <div className="action-btn-box" onClick={openModal}>
            <img src={shareIcon} alt="Share" className="action-icon" />
          </div>
        </div>
        <div className="Save-btn-box">
          <div className="Save-btn">
            <img src={saveicon} alt="Share" className="action-icon" />
          </div>
        </div>
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <h2>Modal Title</h2>
          <p>This is a simple modal.</p>
          <button onClick={() => setShowModal(false)}>Close</button>
        </Modal>
      </div>
    </div>
  );
};

export default BlogTemplate;
