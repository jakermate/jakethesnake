import React from 'react'
import styled from 'styled-components'
export default function About(props) {
    return (
        <AboutContainer id="page-about">
            <header>
                
                <h3>About The Game</h3>
            
            </header>
            <div className="about-body">
                <p>
                    This snake game was build using the ReactJS javascript framework.  It runs at a clockspeed of 60hz and uses a virtual grid to determining collisions between objects while allowin the viewport to be dynamically scaled.
                </p>
                <p>
                    The game objects is built in HTML using animated elements, as opposed to using the canvas API, as allowed me to leverage the performance and ease of use of CSS animations.
                    
                </p>
                <p>
                    - Jake the Snake
                </p>
                <div className="back-container">
                    <button onClick={e => props.toggleAbout(false)}>BACK</button>

                </div>
            </div>
        </AboutContainer>
    )
}
const AboutContainer = styled.div`
    font-family: 'Press Start 2P', cursive;
    position: absolute;
    color: black;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background: white;
    header{
        box-sizing: border-box;
        padding: 40px;
    }
    div.about-body{
        display: block;
        text-align: left;
        line-height: 1.5;
        height: 100%;
        p{
            margin: 30px auto;
            max-width: calc(100vw - 80px);
        }
        div.back-container{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            button{
                font-family: 'Press Start 2P', cursive;
                background: none;
                padding: 20px 30px;
                border: 3px solid black;
                border-radius: 10px;
                display: inline-block;
                &:active, :hover{
                    outline: none;
                }
            }
        }
        
    }
`