// src/components/UserHead.jsx
import React from "react";
import "./UserHead.css";
import profileImage from "./profile.png";
import dotsIcon from "./dots.png";

const UserHead = ({ name, createdOn }) => {
  let date;

  if (createdOn === undefined || createdOn === null) {
    date = new Date();
  } else {
    date = new Date(createdOn);
  }

  if (isNaN(date)) {
    date = new Date();
  }
  return (
    <div className="user-head">
      <div className="left">
        <div className="right-box">
          {" "}
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="mid-name-box">
          <span className="user-name">{name}</span>
       
          <span className="date-created">
            Created On: {date.toLocaleDateString()}
          </span>
        </div>
      </div>
      <div className="right">
        <div className="end-box">
          {" "}
          <img src={dotsIcon} alt="Menu" className="dots-icon" />{" "}
        </div>
      </div>
    </div>
  );
};

export default UserHead;
