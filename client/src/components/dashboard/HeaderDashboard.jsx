import React from "react";
import { useUserInfo } from "../../hooks/useUserInfo";
function HeaderDashboard() {
  const userInformation = useUserInfo();
  return (
    <div>
      {userInformation && (
        <h2 style={{ float: "right", background: "red", padding: 8 }}>
          {userInformation.fullName}
        </h2> 
      )}
    </div>
  );
}

export default HeaderDashboard;
