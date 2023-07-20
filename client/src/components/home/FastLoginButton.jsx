import React from "react";
import { useUserInfo } from "../../hooks/useUserInfo";
import { Link } from "react-router-dom";

function FastLoginButton() {
  const userInformation = useUserInfo();
  return (
    <div>
      {userInformation && (
        <Link to={"/dashboard"}>
          <h1
            style={{
              background: "yellow",
              float: "right",
            }}
          >
            {userInformation.fullName}
          </h1>
        </Link>
      )}
    </div>
  );
}

export default FastLoginButton;
