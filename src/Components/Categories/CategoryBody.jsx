// src/components/CategoryBody.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryBody.css';
import axios from 'axios'; 
import CategoriesBodySkeleton from '../Skeletons/CategoriesBodySkeleton';

const CategoryBody = () => {
  const [categories, setCategories] = useState([]); // State to hold categories
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch categories from API
    axios.get('https://coblog-backend.vercel.app/categories')
      .then(response => {
        setCategories(response.data); // Update state with API response
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []); // Empty dependency array to run effect only once

  if (loading) return <CategoriesBodySkeleton />;

  return (
    <div className="category-body">
      <h2 className='body-title'>Categories</h2>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-item"
            onClick={() => navigate(`/posts/${encodeURIComponent(category.category)}`)}
            style={{ cursor: 'pointer' }}
          >
            {/* Assuming no specific images are provided in the API response */}
            <img src={`https://via.placeholder.com/200x150?text=${category.category}`} alt={category.category} />
            <h3>{category.category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBody;
