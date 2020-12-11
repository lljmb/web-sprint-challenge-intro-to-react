// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function Character (props){ 
    const { character } = props;

    return ( 
    <div className='translate-middle'>
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h5 className ="card-title">{character.name}</h5>
                    <p className='card-text'>Gender: {character.gender === 'n/a' ? 'droid' : character.gender}</p>
                    <p className='card-text'> Birth Year: {character.birth_year}</p>
                    <p className='card-text'> Height: {character.height}</p>
                    <p className='card-text'> Mass: {character.mass}</p>
                </div>
            </div>
        </div>
    </div>
    )


}

