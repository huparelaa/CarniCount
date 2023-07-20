import React, { useState } from "react";
import HomeHeader from "./HomeHeader";
import Login from "../Login/Login";
import SignUp from "../signup/Signup";
import "./index.css";
function Home() {
  const [showLogIn, setShowLogIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(true);
  const seeSignUp = () => {
    setShowLogIn(false);
    setShowSignUp(true);
  };

  const seeLogIn = () => {
    setShowSignUp(false);
    setShowLogIn(true);
  };
  return (
    <>
      <HomeHeader />
      <div className="general-card">
        <div className="buttons-container">
          <button
            className={showLogIn ? "focused-button" : "unfocused-button"}
            id="login-button"
            onClick={seeLogIn}
          >
            Inicia sesión
          </button>
          <button
            className={showSignUp ? "focused-button" : "unfocused-button"}
            id="signup-button"
            onClick={seeSignUp}
          >
            Regístrate
          </button>
        </div>
        {showLogIn && <Login />}
        {showSignUp && <SignUp seeLogIn={seeLogIn} />}
      </div>
    </>
  );
}

export default Home;
