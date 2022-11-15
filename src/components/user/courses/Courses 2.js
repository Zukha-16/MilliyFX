import React from "react";

function Courses() {
  return (
    <div className="bg-secondaryBg w-full p-4 rounded max-w-[350px] mt-12 lg:max-w-full lg:min-h-[580px] relative">
      <h2 className="text-2xl text-center mb-6">Courses</h2>
      <p className="text-secondary text-center lg:text-left">
        You dont have any courses yet...
      </p>
      <button className="text-lg w-full max-w-[350px] border-2 rounded py-2 border-primaryPurple text-primaryPurple hover:bg-primaryPurple transition-all duration-300 ease-in-out hover:text-white mt-4 lg:absolute lg:bottom-[1rem] lg:right-0 lg:left-0 lg:mx-auto">
        Buy now
      </button>
    </div>
  );
}

export default Courses;
