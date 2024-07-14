import React from "react";
import BottomTabs from "../Components/BottomTabs/BottomTabs";
import BlogList from "../Components/Blogs/BlogList";
import BlogTemplate from "../Components/Blogs/BlogTemplate";
import Header from "../Components/Header/Header";
import CreatePost from "../Components/PostComponents/CreatePost";
import '../Stylesheets/Home.css';


function Home() {
  return (
    <div className="Home-page-container" >
      <Header />
      <div className="Middle-content" >
      <CreatePost></CreatePost>
      <BlogList />
      <BlogTemplate></BlogTemplate>
      </div>
      <BottomTabs></BottomTabs>
   
    </div>
  );
}

export default Home;
