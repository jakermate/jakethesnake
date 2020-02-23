import React from 'react'
import styled from 'styled-components'

export default function ScoreView(props) {
    return (
        <ScoreContainer>
            SCORE {props.eaten}
        </ScoreContainer>
    )
}
const ScoreContainer = styled.div`
    font-family: 'Press Start 2P', cursive;
`
