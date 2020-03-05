import React, {useEffect, useState} from 'react'
import SnakeHead from './SnakeHead'
import Menu from './Menu'
import Snake from './models/Snake'
import ArrowControls from './ArrowControls'
import Game from './Game'
import About from './About'
import Transition from './Transition'

export default function GameContainer() {
    const [blockSize, setBlockSize] = useState()
    const [width, setWidth] = useState(0)
    const [direction, setDirection] = useState()
    const [height, setHeight] = useState(0)
    const [running, setRunning] = useState(false)
    const [snakePosition, setSnakePosition] = useState([0,0])
    const [aboutPage, toggleAboutPage] = useState(false)
    const [inTransition, toggleInTransition] = useState(false)
    useEffect(()=>{
        onLoad()
        window.addEventListener('resize', onLoad)
    },[])
    function toggleTransition(){
        toggleInTransition(true)
        const timeout = setTimeout(()=>{
            toggleInTransition(false)
        }, 4000)
    }
    function onLoad(){
        console.log('sizing')
        let windowWidth = window.innerWidth - 60
        let windowHeight = window.innerHeight
        // set to even remainders of 20px so that grid always lines up with integer coordinates
        windowWidth = windowWidth - (windowWidth % 40)
        let blockSize = windowWidth / 40
        windowHeight = windowWidth
        // windowHeight = windowHeight - (windowHeight % blockSize) - 160
        console.log(windowWidth)
        setWidth(windowWidth)
        setHeight(windowHeight)
        setBlockSize(blockSize)
        
    }
    function start(){
        toggleTransition()
        setRunning(true)
    }
   function changeDirection(target){
       let directionString = target.dataset.direction
        setDirection(directionString)
        console.log(directionString)
   }

    return (
        <div id="game-container" style={{position: `relative`,width: '100%', height: '100vh'}}>
            
            {
                // about page
                aboutPage && 
                <About toggleAbout={toggleAboutPage}></About>
            }
            {
                inTransition &&
                <Transition></Transition>
            }
            {/* game not running */}
            {
                !running &&
                <Menu toggleAbout={toggleAboutPage} startGame={start}></Menu>

            }
           {/* About page overlay */}
           {
               aboutPage &&
               <About></About>
           }
            {/* game running */}
            {
                running &&
                <Game  blockSize={blockSize} height={height} width={width}></Game>

            }

            
        </div>
    )
}
