// Profilebody.jsx

import React from "react";
import "./Profilebody.css"; // Import your CSS for styling
import coverImage from "../Blogs/Icons/back.jpg";
import profilePhoto from "../PostComponents/profile.png";
import BlogList from "../Blogs/BlogList";



const Profilebody = () => {
  const userName = "M Asad Nazir";
  const phoneNumber = "03208648637";
  const emailAddress = "asad@blogbook.com";

  return (
    <div className="profile-body">
      <div className="cover-image">
        <img src={coverImage} alt="Cover" />
      </div>
      <div className="profile-picture-section">
        <div className="profile-info-account">
          <div className="profile-photo-account-screen">
            <img src={profilePhoto} alt="Profile" />
          </div>
          <div className="user-name-account">

            <h3>{userName}</h3>
          </div>
        </div>
      </div>
      <div className="profile-Buttons-section">
        <div className="buttons">
          <button className="button">Edit Profile</button>
          <button className="button">Message</button>
        </div>
      </div>

      <div className="user-details">
        <p className="info">
          <strong>Phone:</strong> {phoneNumber}
        </p>
        <p className="info">
          <strong>Email:</strong> {emailAddress}
        </p>
        {/* Add more user info as needed */}
      </div>
     {/* <BlogList></BlogList> */}
    </div>
  );
};

export default Profilebody;
