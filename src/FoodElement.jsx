import React from 'react'
import FoodModel from './models/Food'
import styled, {keyframes} from 'styled-components'
import rat from './img/rat.svg'
export default function FoodElement(props) {
    return (
        <Food style={{boxSizing:`border-box`,background:'white', border: `1px solid rgba(255,255,255,.6)`, borderRadius: `50%`, width:`${props.blockSize}px`, height:`${props.blockSize}px`, position: 'absolute', top:`${props.top}px`, left:`${props.left}px`}}>
           
        </Food>
    )
}
const glow = keyframes`
    0%{
        transform: scale(1);
        box-shadow: 0 0 0 rgba(255,255,255,.3);
    }
    50%{
        transform: scale(1.2);
        box-shadow: 0 0 10px rgba(255,255,255,.3);
    }
    100%{
        transform: scale(1);
        box-shadow: 0 0 0 rgba(255,255,255,.3);
    }
`  
const radiate = keyframes`
    from{
        transform: scale(1);
        opacity: .7
    }
    to{
        transform: scale(3);
        opacity: 0
    }
`
const Food = styled.div`
    background: url(${rat});
    animation: ${glow} 2s ease-in-out infinite;
    &:after{
        content:'';
        position: absolute;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        background: blue;
        animation: 3s ${radiate} linear infinite;
        box-shadow: 0 0 4px rgba(12,122,202,1);
        border-radius: 50%;
    }
`

