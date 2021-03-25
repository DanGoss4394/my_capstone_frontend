import React, { useState, useContext } from "react";
import axois from "axios";
import AuthContext from "../contexts/AuthContext";

const AuthForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [formToShow, setFormToShow] = useState("login");

  const { handleSuccessfulLogin } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axois({
      method: "post",
      url: `http://localhost:5000/api/v1/${formToShow}`,
      data: {
        username: username,
        password: password,
        // username,
        // password,
      },
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        handleSuccessfulLogin();
      })
      .catch((err) => console.log(err));
  };

  const handleFormToShow = () => {
    if (formToShow === "login") {
      setFormToShow("register");
    } else if (formToShow) {
      setFormToShow("login");
    }
  };

  const formQuestionText = () => {
    if (formToShow === "login") {
      return "Need an account? Register";
    } else {
      return "Already have an account? Login";
    }
  };

  return (
    <div>
      <h1>{formToShow}</h1>
      <form onSubmit={handleSubmit}>
        <div className="user_input">
          <input
            type="text"
            name="username"
            placeholder="Username..."
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="user_input">
          <input
            type="password"
            name="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          {formToShow}
        </button>
        <div onClick={handleFormToShow}>{formQuestionText()}</div>
      </form>
    </div>
  );
};

export default AuthForm;
