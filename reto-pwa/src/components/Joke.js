import { useState, useEffect } from "react";

const Joke = () => {
  const API_URL = 'https://api.chucknorris.io/jokes/random';
  const [joke, setJoke] = useState("Loading...");

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("joke") === null) {
        setJoke("Loading...");
      } else {
        setJoke(localStorage.getItem("joke"));
      }
    } else {
      fetch(API_URL)
        .then(response => response.json())
        .then(json => {
          const { value } = json;
          console.log(value);
          setJoke(value);
          localStorage.setItem("joke", value);
        })
    }
  }, []);

  return <>
    <h1>Joke</h1>
    <p>{joke}</p>
  </>
}

export default Joke;