import React from "react";
import plusIcon from "../../assets/new.png";
import { useNavigate } from "react-router-dom";

function NewBlogBtn() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/newblog");
  };
  return (
    <>
      <div className="flex flex-center w-full md:block">
        <button
          onClick={handleClick}
          className="mt-2 mx-auto md:my-4 md:right-0 md:mr-2 text-white  md:absolute text-2xl p-2 rounded-full bg-blue-600"
        >
          Create Blog{" "}
          <img
            className="inline w-10 bg-white outline-none rounded-full"
            src={plusIcon}
            alt=""
          />
        </button>
      </div>
    </>
  );
}

export default NewBlogBtn;
