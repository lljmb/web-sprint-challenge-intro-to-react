import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import './App.css';
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ characters, setCharacters ] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
    .get('https://swapi.dev/api/people/')
    .then(res => {
      setCharacters(res.data.results)
    })
    .catch(err => {
      console.log('error', err)
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <StyledDiv>
        <div className='position relative'>
      {
        characters.map(character => {
          return <Character key={character.id} character={character} />
        })
      }
      </div>
      </StyledDiv>
    </div>
  );
}

export default App;

const StyledDiv = styled.div`
display: flex wrap;
opacity: .65;
margin-left: 33%;
margin-right: 0%auto;
`