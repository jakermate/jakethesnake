import React, {useEffect, useLayoutEffect} from 'react'
import styled from 'styled-components'
import anime from 'animejs'

export default function Menu(props) {
    useEffect(()=>{
        anime({
            targets: '.title-animation',
            translateY: 20,
            delay: anime.stagger(50, {start: 150})
        })
        anime({
            targets: '.title-animation',
            translateY: -6,
            scale: 2,
            color: 'rgb(255,25,255)',
            delay: anime.stagger(50, {start: 1000}),
            direction: 'alternate',
            endDelay: 10,
            loop: true
        })
    })
    return (
        <div>
            <Title id="title-container"><span className="title-animation">S</span> <span className="title-animation">N</span> <span className="title-animation">A</span> <span className="title-animation">K</span> <span className="title-animation">E</span></Title><br/>
            <h5>MENU</h5>
            <button style={{color:'white',background:'none', padding:'10px', border: 'none'}} onClick={e=>props.startGame()}>START</button>
            <button>SCORES</button>
        </div>
    )
}
const Title = styled.h3`
    padding-left: 10px;
    padding-top: 40px;
    letter-spacing: 10px;
    font-family: 'Press Start 2P', cursive;
    span{
        display: inline-block;
    }

`