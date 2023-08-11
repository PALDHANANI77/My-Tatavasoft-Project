import React from "react";

const Abc = (props) => {
  return (
    <>{props.touched && <p className=" mb-1 text-danger">{props.message}</p>}</>
  );
};



export default Abc;