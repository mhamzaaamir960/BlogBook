import React from "react";
import "./ShareComponent.css";


const ShareComponent = ({ postLink }) => {


const URIComponent = 'https://incognitoink.vercel.app/Create';


  const shareOnWhatsApp = () => {
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      postLink
    )}`;
    window.open(whatsappURL, "_blank");
  };

  const shareOnFacebook = () => {
    const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      postLink
    )}`;
    window.open(facebookURL, "_blank");
  };

  const shareOnTwitter = () => {
    const twitterURL = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      postLink
    )}`;
    window.open(twitterURL, "_blank");
  };

  return (
    <div className="share-component">
      <h3 className="share-title">Share</h3>
      <h4 className="share-post-link">{URIComponent}</h4>
      <div className="share-buttons">


        <div className="share-btn-div">
         
          <button onClick={shareOnWhatsApp} className="share-button whatsapp">
            WhatsApp
          </button>
        </div>


        <div className="share-btn-div">
       
          <button onClick={shareOnFacebook} className="share-button facebook">
            Facebook
          </button>
        </div>

        <div className="share-btn-div">
       
        <button onClick={shareOnTwitter} className="share-button twitter">
          Twitter
        </button>
      </div>
      </div>
    </div>
  );
};

export default ShareComponent;
