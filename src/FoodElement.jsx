import React from 'react'
import FoodModel from './models/Food'

export default function FoodElement(props) {
    return (
        <div style={{background:'yellow', width:`${props.blockSize}px`, height:`${props.blockSize}px`, position: 'absolute', top:`${props.top}px`, left:`${props.left}px`}}>
        </div>
    )
}
