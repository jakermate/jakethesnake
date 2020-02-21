import React, {useState, useEffect} from 'react'
import Snake from './models/Snake'
import styled, {keyframes} from 'styled-components'


export default function SnakeHead(props) {
    
    return (
        <div id="snake-head" style={{transition:'.3s linear', position: 'absolute', width:`${props.blockSize}px`,height:`${props.blockSize}px`, top:`${props.snake.y}px`, left:`${props.snake.x}px`}}>
        </div>
    )
}