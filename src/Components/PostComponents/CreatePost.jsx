import React from 'react';
import './CreatePost.css';
import { useNavigate } from 'react-router-dom';



const CreatePost = () => {

  const Navigate = useNavigate();


  const Handleprofile = () =>{
   
    Navigate('./Account');

  };

  const HandleCreate = () =>{
   
    Navigate('./Create');

  };


  return (
    <section className='cont-Create-post'>   
      
       <div className="create-post-container">
      <div className="profile-photo-container" onClick={Handleprofile}>
        <img
          src="https://via.placeholder.com/50"
          alt="Profile"
          className="profile-photo"
        />
      </div>
      <div className="input-container">
        <input onClick={HandleCreate}
          type="text"
          placeholder="What's on your mind?"
          className="input-field"
        />
      </div>
    </div>
    </section>

  );
};

export default CreatePost;
