import React from "react";

const Page2 = (props) => {
  return (
    <div
      style={{
        height: "100vh",
        position: "relative",
      }}
    >
      {props.children}
    </div>
  );
};

export default Page2;
