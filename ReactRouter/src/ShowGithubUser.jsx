import React from "react";
import { useParams } from "react-router-dom";

function ShowGithubUser() {
  const { username } = useParams(); 
  return <GithubUser username={username} />;
}

function GithubUser({ username }) {
  return (
    <div>
      <h2>GitHub User: {username}</h2>
    </div>
  );
}
export default ShowGithubUser;




