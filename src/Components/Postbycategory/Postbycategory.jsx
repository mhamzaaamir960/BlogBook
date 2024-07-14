// src/components/Postbycategory.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Postbycategory = () => {
  const { categoryName } = useParams();
  const decodedCategoryName = decodeURIComponent(categoryName);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch posts by category from API
    axios.get(`https://coblog-backend.vercel.app/posts/by-category/${decodedCategoryName}`)
      .then(response => {
        setPosts(response.data); // Update state with API response
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, [decodedCategoryName]);

//   if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Posts in {decodedCategoryName}</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Postbycategory;
