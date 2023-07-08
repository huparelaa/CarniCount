import React, { useState, useEffect } from "react";
import { createTaskRequest } from "../../api/api";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function Home() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const { data } = await createTaskRequest();
      setResponse(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <ul>
        {response.map((element) => (
          <li key={element.user_id}>{element.fullName}</li>
        ))}
      </ul>
      <Link to={"/login"}>
        <Button variant="outlined">Log in</Button>
      </Link>
      <Link to={"/signup"}>
        <Button variant="outlined">Sign up</Button>
      </Link>
    </>
  );
}

export default Home;
