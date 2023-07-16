import { useEffect, useState } from "react";
import { getUserInfo } from "../api/apiUser";

export function useUserInfo() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfoFetched = await getUserInfo();
        setUserInfo(userInfoFetched);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserInfo();
  }, []);
  return userInfo;
}
