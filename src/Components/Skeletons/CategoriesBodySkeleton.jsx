import React from 'react';
import './CategoriesBodySkeleton.css';

const CategoriesBodySkeleton = () => {
  const skeletonItems = Array.from({ length: 10 });

  return (
    <div className="category-body-skeleton">
      <div className="category-grid-skeleton">
        {skeletonItems.map((_, index) => (
          <div key={index} className="category-skeleton-item">
            <div className="skeleton-image"></div>
            <div className="skeleton-title"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesBodySkeleton;
