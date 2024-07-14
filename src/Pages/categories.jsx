import React from "react";
import BottomTabs from "../Components/BottomTabs/BottomTabs";
import CategoryBody from "../Components/Categories/CategoryBody";

function Categories() {
  return (
    <>
      <div className="categories-container">
        <CategoryBody></CategoryBody>
        <BottomTabs></BottomTabs>
      </div>
    </>
  );
}

export default Categories;
