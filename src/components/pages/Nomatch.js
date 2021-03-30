import React from "react";
import { Link } from "react-router-dom";

const Nomatch = () => {
  return (
    <div>
      <h1>You Should Login or Register First!!</h1>
      <Link to="/auth">Login/Register</Link>
      <h1>OR Go Back To The HomePage</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Nomatch;
