import React, { useState, useEffect } from "react";
import { getUser } from "../helpers/getUser";

const FetchCard = () => {
  const [user, setUser] = useState({});

  const { name, email, username, id } = user;

  function apiUser() {
    getUser().then((newUser) => {
      setUser(newUser);
    });
  }

  useEffect(() => {
    apiUser();
  }, []);

  return (
    <>
      <h2>Usuario: {name}</h2>
      <p>
        <b>ID</b>: {id}
      </p>
      <p>
        <b>Username</b>: {username}
      </p>
      <p>
        <b>Email</b>: {email}
      </p>
      <button onClick={apiUser}>Change user</button>
    </>
  );
};

export default FetchCard;
