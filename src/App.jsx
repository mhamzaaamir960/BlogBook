import CreateNewBlog from "./Components/Blogs/CreateNewBlog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogDetails from "./Components/Blogs/BlogDetails";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import DashBoard from "./Components/AccountDetails/DashBoard";
import Categories from "./Pages/categories";
import Create from "./Pages/Create";
import Account from "./Pages/Account";
import Comments from "./Pages/Commentspage";
import Postbycategory from "./Components/Postbycategory/Postbycategory";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="router-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newblog" element={<CreateNewBlog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/createnewblog" element={<CreateNewBlog />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/create" element={<Create />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/posts/:categoryName" element={<Postbycategory />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
