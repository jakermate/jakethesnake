import React, {useEffect, useState} from 'react'
import SnakeHead from './SnakeHead'
import Menu from './Menu'
import Snake from './models/Snake'
import ArrowControls from './ArrowControls'
import Game from './Game'

export default function GameContainer() {
    const [blockSize, setBlockSize] = useState()
    const [width, setWidth] = useState(0)
    const [direction, setDirection] = useState()
    const [height, setHeight] = useState(0)
    const [running, setRunning] = useState(false)
    const [snakePosition, setSnakePosition] = useState([0,0])

    useEffect(()=>{
        onLoad()
    },[])
  
    function onLoad(){
        let windowWidth = window.innerWidth
        let windowHeight = window.innerHeight
        // set to even remainders of 20px so that grid always lines up with integer coordinates
        windowWidth = windowWidth - (windowWidth % 40)
        windowHeight = windowHeight - (windowHeight % 40) - 160
        console.log(windowWidth)
        setWidth(windowWidth)
        setHeight(windowHeight)
        let blockSize = windowWidth / 40
        setBlockSize(blockSize)
        
    }
    function start(){
        setRunning(true)
    }
   function changeDirection(target){
       let directionString = target.dataset.direction
        setDirection(directionString)
        console.log(directionString)
   }

    return (
        <div id="game-container" style={{width: '100%', height: '100vh'}}>
            {/* game not running */}
            {
                !running &&
                <Menu startGame={start}></Menu>

            }
            {/* game running */}
            {
                running &&
                <Game blockSize={blockSize} height={height} width={width}></Game>

            }

            
        </div>
    )
}
