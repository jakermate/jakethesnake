import React from 'react'
import styled from 'styled-components'

export default function Menu(props) {
    return (
        <div>
            <Title>S N A K E</Title><br/>
            <h5>MENU</h5>
            <button style={{color:'white',background:'none', padding:'10px', border: 'none'}} onClick={e=>props.startGame()}>START</button>
            <button>SCORES</button>
        </div>
    )
}
const Title = styled.h3`
    letter-spacing: 10px;
    font-family: 'Press Start 2P', cursive;

`