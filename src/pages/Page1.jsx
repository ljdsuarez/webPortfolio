import React from "react";

const Page1 = (props) => {
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

export default Page1;
