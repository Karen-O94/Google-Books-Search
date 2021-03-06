import React from "react";
import "./style.css";

function Wrapper(props) {
  const bgimage = {
    backgroundImage: `url(https://images.unsplash.com/photo-1529148482759-b35b25c5f217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};
  return <main className="wrapper" style={bgimage}>{props.children}</main>;
}

export default Wrapper;