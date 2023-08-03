import React from "react";
import { useUserInfo } from "../../../hooks/useUserInfo";
import Loading from "../../../assets/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import { useNavigate } from "react-router-dom";
function HeaderDashboard() {
  const userInformation = useUserInfo();
  const navigate = useNavigate();
  if (!userInformation) {
    return <Loading />;
  }
  const handleSignOut = () => {
    localStorage.removeItem("user_id");
    navigate("/");
  };
  return (
    <header className="dashboard-header">
      <h2 className="dashboard-name">
        {userInformation && userInformation.fullName}
      </h2>
      <FontAwesomeIcon
        icon={faSignOutAlt}
        className="dashboard-sign-out"
        onClick={handleSignOut}
      />
    </header>
  );
}

export default HeaderDashboard;
