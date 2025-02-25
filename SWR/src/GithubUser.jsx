import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then(response => response.json()); // Funzione Asincrona per ottenere dati da un'API (esegue la funzione quando arriva la risposta dal server convertendolo in JSON e restituendo una promise)

const useGithubUser = (username) => {
  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null, // Qui è quando chiede  if the username is null, no request is made. Ho cercato come fare
    fetcher
  );

  return {
    user: data,
    loading: !data && !error, 
    error,
    refetch: () => mutate() //Cercato: è la funzione per fare il refetch manuale. Esegue una nuova richiesta per ottenere dati senza ricaricare la pagina
  };
};
const GithubUser = ({ username }) => {
  const { user, loading, error, refetch } = useGithubUser(username);

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

