import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default function Details(props) {
  const { friendId, close } = props
  const [details, setDetails] = useState(null)

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${friendId}`)
      .then(res => { setDetails(res.data) })
      .catch(err => { debugger }) // eslint-disable-line
  }, [friendId])

  return (
    <StyledDeets className='container'>
      <h2>Details:</h2>
      {
        details &&
        <>
          <p>{details.name} is {details.status}</p>
      <p>{details.name} is a {details.species}</p>
           They have appeared on:
           <MiniBio>
          <ul>
            {
              details.episode.map((like, idx) => <li key={idx}>{like}</li>)
            }
          </ul>
          </MiniBio>
        </>
      }
      <button onClick={close}>Close</button>
    </StyledDeets>
  )
}


const StyledDeets = styled.div`
font-weight: bolder`

const MiniBio = styled.div`
    display: inline;
    width: 200px;
    word-wrap: break-word;
    font-size: .5rem;
`