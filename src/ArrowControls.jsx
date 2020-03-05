import React from 'react'
import arrowActive from './img/arrow-active.svg'
import arrowSelect from './img/arrow-select.svg'
import arrowDisabled from './img/arrow-disabled.svg'
import styled from 'styled-components'

export default function ArrowControls(props) {

    return (
        <Grid >
            <div className="button-up button" onClick={e=>props.changeDirection(e.target)} data-direction="up">
                <img src={props.direction === 'up' ? arrowActive : arrowSelect} alt="" style={{pointerEvents:'none',transform: 'rotate(180deg)'}}/>
            </div>
            <div className="button-left button" onClick={e=>props.changeDirection(e.target)} data-direction="left">
                <img src={props.direction === 'left' ? arrowActive : arrowSelect} alt="" style={{pointerEvents:'none',transform: 'rotate(90deg)'}}/>
            </div>
            <div className="button-right button" onClick={e=>props.changeDirection(e.target)} data-direction="right">
                <img src={props.direction === 'right' ? arrowActive : arrowSelect} alt="" style={{pointerEvents:'none',transform: 'rotate(-90deg)'}}/>
            </div>
            <div className="button-down button" onClick={e=>props.changeDirection(e.target)} data-direction="down">
                <img src={props.direction === 'down' ? arrowActive : arrowSelect} alt="" style={{pointerEvents:'none',transform: 'rotate(0deg)'}}/>
            </div>
        </Grid>
    )
}
const Grid = styled.div`
    position: relative;
    display: grid;
    width: 100%;
    height: 100px;
    max-width: 400px;
    margin: 0 auto;
    grid-template-areas: 
    "left up up right"
    "left down down right";
    .button{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        box-sizing: border-box;
        padding: 6px;
    }
    .button-up{
        grid-area: up;
        border-top: 1px solid white;
        img{
            height: 100%;
        }
    }
    .button-down{
        grid-area: down;
        border-bottom: 1px solid white;
        border-top: 1px solid white;
        img{
            height: 100%;
        }

    }
    .button-right{
        grid-area: right;
        border: 1px solid white;
        border-bottom-right-radius: 8px;
        border-top-right-radius: 8px;
        img{
           width:100%;
        }
    }
    .button-left{
        grid-area: left;
        border: 1px solid white;
        border-bottom-left-radius: 8px;
        border-top-left-radius: 8px;
        img{
            width: 100%;
        }
    }
`