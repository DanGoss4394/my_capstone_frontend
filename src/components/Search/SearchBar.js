import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchBar = (props) => {
  const [input, setInput] = useState("");

  let history = useHistory();

  const SearchData = (e) => {
    e.preventDefault();
    history.push(`/public-profile/${input}`);
    setInput("");
  };

  const BarStyling = {
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
  };
  return (
    <form onSubmit={SearchData}>
      <input
        style={BarStyling}
        key="random1"
        value={input}
        placeholder={"search"}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
