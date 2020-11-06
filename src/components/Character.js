// Write your Character component here
import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function Character({ props }) {
  return (
    <StyledFriend>
      {props.characters.name}
      <button>
        See details
      </button>
    </StyledFriend>
  )
}

// creating a keyframe
const kf = keyframes`
  100%{
    opacity: 1;
    transform: scale(1);
  }
`;

// const Button = styled.button`
// color: darkcyan;
// `

const StyledFriend = styled.div`
opacity: 0;
animation: ${kf} 2.5s ease-in-out forwards;
color: ${(pr) => (pr.danger ? pr.theme.danger : pr.theme.primaryColor)};
font-weight: ${pr => (pr.bold ? 'bold' : 'initial')};
width: 60%;
display: flex;
justify-content: space-between;

button {
  color: ${(props) => props.theme.tertiaryColor};
  &:hover{
    transform: scale(1.3);
    transition: transform 0.5s ease-in-out;
  }
  transition: transform 0.5s ease-in-out;
}

@media(max-width: 550px) {
  width: 100%auto;
}

&:hover {
  color: ${(props) => props.theme.secondaryColor};
  background-color: lightcoral;
  transition: all 0.2s ease-in-out;
}
transition: all 0.2s ease-in-out;
`

// always write the styled component outside of the component itself
// `` represent the function invocation, same as styled.div()