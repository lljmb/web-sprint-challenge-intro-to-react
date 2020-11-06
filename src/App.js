import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Details from './components/Details'
import Friend from './components/Character'
import './App.css';

const App = () => {

  const [characters, setCharacters] = useState([])
  const [currentFriendId, setCurrentFriendId] = useState('1')

  const openDetails = id => {
    setCurrentFriendId(id)
  }

  const closeDetails = () => {
    setCurrentFriendId(null)
  }

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        setCharacters(res.data.results)
        console.log(res.data.results);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
   
    <div className='container'>
      <h1 className="Header">Characters:</h1>
      <div className="App">
        {
          characters.map((character) => {
            return <span key={character.id} character={character} action={openDetails}></span>
          })
        }
      {
        currentFriendId && <Details friendId={currentFriendId} close={closeDetails} />
      }
    </div>
    </div>

  // return (
  //   <div className="App">
  //     <h1 className="Header">Characters</h1>
  //   </div>
   )
}

export default App;
