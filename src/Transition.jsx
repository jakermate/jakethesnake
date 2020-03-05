import React from 'react'
import styled from 'styled-components'
import anime from 'animejs'
import { useEffect } from 'react'
export default function Transition() {
    useEffect(()=>{
        anime({
            targets: '.transition-cell',
            scale: [0,1],
            delay: anime.stagger(10,{
                from: 'first'
            }),
            duration: 700,
            endDelay: 400,
            direction: 'alternate'

        })
        
    },[])
    return (
        <div style={{position: 'relative', zIndex: `100`}}>
            <LoadingMessage className="loading-message">
               <div>LOADING</div> 
            </LoadingMessage>
            <TransitionContainer>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
                <div className="transition-cell"></div>
            </TransitionContainer>
        </div>
       
    )
}
const TransitionContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    z-index: 100;
    .transition-cell{
        width: 10vw;
        height: 10vh;
        background: white;
    }
`
const LoadingMessage = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 30px;
    z-index: 101;
    font-family: 'Press Start 2P', cursive;
`