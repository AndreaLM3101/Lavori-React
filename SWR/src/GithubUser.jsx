import React from "react";
import { useGithubUser } from "./useGithubUser";
import useSWR from "swr";


const GithubUser = ({ username }) => {
  // const { user, loading, error, refetch } = useGithubUser(username);
  const { data:user, error, isLoading:loading, mutate:refetch } = useSWR(
    username ? `https://api.github.com/users/${username}` : null, // Qui è quando chiede  if the username is null, no request is made. Ho cercato come fare
  );

  if (loading) {
    return <div>Loading...</div>;  
  }

  if (error) {
    return <div>Error: {error.message}</div>; 
  }

  if (user) {
    return (
      <div>
        <h2>{user.login}</h2> 
        <button onClick={refetch}>Refetch Data</button>
      </div>
    );
  }

  return null; 
};

export default GithubUser;

