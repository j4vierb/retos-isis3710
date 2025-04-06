import { useState, useEffect } from 'react';

const publicKey = "0fb7392c5fb6640ee072287eb20a3216";
const privateKey = "0123cf370d6aa00e7fd60d27c6dd110ee72da2ba";
const ts = "1";
const hash = "a53374cc45e4083686d5734c0d762fcb";
const apiURL = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(apiURL)
      .then(res => res.json())
      .then(json => {
        const { data } = json;
        console.log(data.results);
        setCharacters(data.results);
      })
  }, [])
  return <>
    <h1>Caracteres</h1>
    {
      characters.map(character => {
        return <div key={character.id}>
          <h2>{character.name}</h2>
          <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
        </div>
      })
    }
  </>
}

export default Characters;