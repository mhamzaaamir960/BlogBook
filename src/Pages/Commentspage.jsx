import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BackButton from "../assets/icons/back.png";
import UserHead from "../Components/PostComponents/UserHead";
import likeIcon from "../Components/Blogs/Icons/like.png";
import commentIcon from "../Components/Blogs/Icons/comment.png";
import shareIcon from "../Components/Blogs/Icons/share.png";
import saveIcon from "../Components/Blogs/Icons/Save.png";
import ThreeDots from "../Components/PostComponents/dots.png";
import PostComponent from "../Components/Blogs/Icons/share.png";
import "../Stylesheets/Comments.css"; // Import the CSS file

function Comments() {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate(-1);
  };

  const { title, text, authorName, createdOn, imageUrl } = location.state;

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const renderText = () => {
    if (isExpanded || text.length <= 100) {
      return text;
    }
    return text.substring(0, 100) + "...";
  };

  const commentClick = () => {
    navigate("/Comments");
  };

  return (
    <>
      {/* Header */}
      <div className="header-comments">
        <img
          src={BackButton}
          alt="Back"
          className="backButton"
          onClick={goBack}
        />
        <h2 className="title">Comments</h2>
        <img src={ThreeDots} alt="Options" className="threeDots" />
      </div>

      <section className="selectedblog">
        {/* Main content */}
        <div className="blog-card">
          <UserHead name={authorName} createdOn={createdOn} />
          <div className="blog-content-box">
      <h2 className="blog-title">{title}</h2>
      <p className="blog-content">{renderText()}</p>
      </div>
          {renderText().length > 100 && (
            <button onClick={toggleText} className="read-more-btn">
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
          {/* Hardcoded image URL */}
          <img src={imageUrl} alt="Sample Blog" className="blog-image" />
          <div className="blog-actions">
            <div className="Btns-box">
              <div className="action-btn-box">
                <img src={likeIcon} alt="Like" className="action-icon" />
              </div>
              <div className="action-btn-box"  >
                <img
                  src={commentIcon}
                  alt="Comment"
                  className="action-icon"
                  onClick={commentClick}
                 
                  
                />
              </div>
              <div className="action-btn-box">
                <img src={shareIcon} alt="Share" className="action-icon" />
              </div>
            </div>
            <div className="Save-btn-box">
              <div className="Save-btn">
                <img src={saveIcon} alt="Save" className="action-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Input for commenting */}
      <div className="commentInput">
        <input
          type="text"
          placeholder="Add your comment..."
          className="inputField"
        />
        <div className="post-comment-btn">
          <img src={PostComponent} alt="Share" className="post-comment-icon" />
        </div>
      </div>
    </>
  );
}

export default Comments;
