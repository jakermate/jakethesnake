import React, {useEffect, useState, useRef} from 'react'
import Snake from './models/Snake'
import Food from './models/Food'
import SnakeHead from './SnakeHead'
import ArrowControls from './ArrowControls'
import FoodElement from './FoodElement'
import BodySegment from './BodySegment'
import ScoreView from './ScoreView.jsx'
import GameOver from './GameOver'
import styled, {keyframes} from 'styled-components'
export default function Game(props) {
    const [speed, setSpeed] = useState(100)
    const [direction, setDirection] = useState('down')
    const [snake, resetSnake] = useState(new Snake(props.width, props.height, props.blockSize))
    const [eaten, addEaten] = useState(0)
    const [tailState, setTailState] = useState([])
    const [posX, setPosX] = useState(props.width / 2)
    const [posY, setPosY] = useState(props.height / 2)
    const [frame, setFrame] = useState(0)
    const [food, setFood] = useState(new Food(props.width, props.height))
    const [foodx, setFoodx] = useState(0)
    const [foody, setFoody] = useState(0)
    const gameElementsRef = useRef()
    const REF_FOODX = useRef(foodx)
    REF_FOODX.current = foodx
    const REF_FOODY = useRef(foody)
    REF_FOODY.current = foody
    const REF_EATEN = useRef(eaten)
    const [gameOver, setGameOver] = useState(false)
    REF_EATEN.current = eaten
    const REF_TAIL = useRef(tailState)
    REF_TAIL.current = tailState
    const REF_DIRECTION = useRef(direction)
    REF_DIRECTION.current = direction
    useEffect(()=>{ 
        window.addEventListener('keydown', changeDirectionWithCode)
    },[])
    function changeDirection(target){
        // makeFullscreen()
        let newDirection = target.dataset.direction
        // if direction is backwards compared to current direction, ignore and return from function early
        if(newDirection === 'up' && REF_DIRECTION.current === 'down'){
            console.log('new = '+ newDirection + '||| current= '+REF_DIRECTION.current)
            return
        }
        if(newDirection === 'down' && REF_DIRECTION.current === 'up'){
            return
        }
        if(newDirection === 'left' && REF_DIRECTION.current === 'right'){
            return
        }
        if(newDirection === 'right' && REF_DIRECTION.current === 'left'){
            return
        }
        
        setDirection(newDirection)
        // console.log(newDirection)
    }
    function changeDirectionWithCode(event){
        let newDirection = event.keyCode
        if(newDirection === 38 && REF_DIRECTION.current === 'down'){
            return
        }
        if(newDirection === 40 && REF_DIRECTION.current === 'up'){
            return
        }
        if(newDirection === 37 && REF_DIRECTION.current === 'right'){
            return
        }
        if(newDirection === 39 && REF_DIRECTION.current === 'left'){
            return
        }
        switch(newDirection){
            case 38:
                setDirection('up')
                break
            case 40:
                setDirection('down')
                break
            case 37:
                setDirection('left')
                break
            case 39:
                setDirection('right')
                break
            default:
                break
        }
    }
    
    // changeDirection callback to change snakeObject
    useEffect(()=>{
        snake.changeDirection(direction)
    }, [direction])

    useEffect(()=>{
        console.log('Mounting game component.')
        setFood(new Food(props.width, props.height,props.blockSize))
        generateFood()
        runGame()

    },[])
    function makeFullscreen(){
        document.documentElement.requestFullscreen()
    }
    function TIMOUT_FUNC(){
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                res('timeout complete')
            },4000)
        })
    }
    async function runGame(){
        // makeFullscreen()
        const timeoutFunc = await TIMOUT_FUNC()
        let counter = 0
        let tail = [{}]
        const loop = setInterval(function nextFrame(){
            // get last location before moving snake
            let lastCoordinates = {
                x: snake.x,
                y: snake.y
            }

            snake.updateLocation()
            updateTail(lastCoordinates)

            counter++
            setFrame(counter)

            checkIfEaten(REF_FOODX.current, REF_FOODY.current)
            checkForCollisions(loop)
        }, speed)
        function updateTail( lastCoordinates){
            tail.unshift(lastCoordinates)
            console.log(REF_EATEN.current)
            tail = tail.slice(0,REF_EATEN.current)
            console.log(tail)
            setTailState(tail)
        }
        function checkIfEaten(foodX, foodY){
            if(foodX === snake.x && foodY === snake.y){
                console.log('eaten')
                generateFood()
                growSnake()
            }
        }
        
        function checkForCollisions(loop){

            wallCollision()
            tailCollision()

            function tailCollision(){
                let tail = REF_TAIL.current
                tail.forEach((tailSeg, index)=>{
                    if(snake.x == tailSeg.x && snake.y == tailSeg.y){
                        stopGame(loop)
                        
                    }
                })
            }
            function wallCollision(){
                if(snake.x < 0 || snake.x >= props.width || snake.y < 0 || snake.y >= props.height){
                    console.log('Collision with wall.')
                    stopGame(loop)
            }
            }
        }
        function growSnake(){
            let newEaten = REF_EATEN.current
            newEaten++
            addEaten(newEaten)
        }
        function stopGame(loop){
            setGameOver(true)
            clearInterval(loop)
        }
    }
    
    function generateFood(){
        let random1 = Math.floor((Math.random()*props.width) - 1)
         console.log(random1)
        let remainder1 = random1 % props.blockSize
        console.log(remainder1)
        random1 = random1 - remainder1
        setFoodx(random1)
        let random2 = Math.floor((Math.random()*props.height) - 1)
        let remainder2 = random2 % props.blockSize
        random2 = random2 - remainder2
        console.log(props.width)
        console.log(props.height)
        console.log(random1)
        console.log(random2)
        setFoody(random2)
    }
    
    
    return (
        <GameView style={{paddingTop:`30px`,display: `flex`, flexDirection:`column`,justifyContent:`space-around`,alignItems:`center`, height: `100%`, position: `relative`, zIndex:`40`}}>
            <div id="game-elements" ref={gameElementsRef} style={{position:`relative`,width:`${props.width}px`, height:`${props.height}px`, margin: `0 auto`, border:'1px solid white', background: 'black', borderRadius: '4px', overflow: `hidden`}}>
                <SnakeHead  frame={frame} x={posX} y={posY} snake={snake} blockSize={props.blockSize} speed={speed}></SnakeHead>
                <FoodElement frame={frame} left={foodx} top={foody} blockSize={props.blockSize}></FoodElement>
                { // tail segments
                    tailState.map((content, index)=>{
                           return( 
                           <TailSegment key={index} style={{position:`absolute`,width:`${props.blockSize}px`, height:`${props.blockSize}px`, background:`rgb(252, ${15+(index*10)}, ${3+(index*5)})`, top:`${content.y}px`, left:`${content.x}px`, color:`white`}}>
                               
                           </TailSegment>)
                        
                    })
                }
                {
                    gameOver &&
                    <GameOver eaten={eaten} blockSize={props.blockSize} width={props.width} height={props.height}></GameOver>
                }
            </div>
            <div style={{width: `${props.width}px`, margin:`0 auto`,display: 'flex', flexDirection:`column`,alignItems:`center`,height: '160px', position:'relative', boxSizing: 'border-box', padding: `10px`, justifyContent:'space-between'}}>
                <ScoreView eaten={REF_EATEN.current}></ScoreView>
                <ArrowControls  direction={direction} changeDirection={changeDirection}></ArrowControls>
            </div>
        </GameView>
    )
}
const fadein = keyframes`
    from {
        opacity: 0
    }
    to{
        opacity: 1;
    }
`

const GameView = styled.div`
    animation-delay: 3s;
    animation: 1s ${fadein} ease-in forwards;
`
const addSegment = keyframes`
    from{
        transform: scale(20);
        opacity: 0;
    }
    to{
        transform: scale(1);
        opacity: 1;
    }
`
const TailSegment = styled.div`
    animation: 300ms ${addSegment} linear forwards;
`