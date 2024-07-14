import React from "react";
import BottomTabs from "../Components/BottomTabs/BottomTabs";
import Profilebody from "../Components/AccountDetails/Profilebody";
import BackButton from "../assets/icons/back.png";
import ThreeDots from "../Components/PostComponents/dots.png";
import BlogList from "../Components/Blogs/BlogList";
import { useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };










  

  return (
   <div className="account-page-bg">
      {" "}
      <div className="header-comments">
        <img
          src={BackButton}
          alt="Back"
          className="backButton"
          onClick={goBack}
        />
        <h2 className="title">Account Page</h2>
        <img src={ThreeDots} alt="Options" className="threeDots" />
      </div>
      <div className="Account-page-container">
        <Profilebody></Profilebody>
       <BlogList></BlogList>
        <BottomTabs></BottomTabs>
      </div>
      </div>
  );
}

export default Account;
