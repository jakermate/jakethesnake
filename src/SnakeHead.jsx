import React, {useState, useEffect} from 'react'
import Snake from './models/Snake'
import styled, {keyframes} from 'styled-components'


export default function SnakeHead(props) {
    let direction = props.snake.direction
   
    return (
        <div id="snake-head" style={{transition:`${1/(1000/props.speed)}s linear`, position: 'absolute', width:`${props.blockSize}px`,height:`${props.blockSize}px`, top:`${props.snake.y}px`, left:`${props.snake.x}px`}}>
        </div>
    )
}