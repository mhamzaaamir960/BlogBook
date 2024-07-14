// src/components/BlogSkeleton.jsx
import React from 'react';
import './BlogSkeleton.css';

const BlogSkeleton = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-title"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text short"></div>
      <div className="skeleton-image"></div>
    </div>
  );
};

export default BlogSkeleton;
