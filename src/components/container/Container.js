import React from "react";

function Container({ children }) {
  return (
    <div className="container max-w-xs m-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1440px]">
      {children}
    </div>
  );
}

export default Container;
