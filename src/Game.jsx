import React, {useEffect, useState, useRef} from 'react'
import Snake from './models/Snake'
import Food from './models/Food'
import SnakeHead from './SnakeHead'
import ArrowControls from './ArrowControls'
import FoodElement from './FoodElement'
import BodySegment from './BodySegment'
import ScoreView from './ScoreView.jsx'

export default function Game(props) {
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
    REF_EATEN.current = eaten
    useEffect(()=>{ 
        window.addEventListener('keydown', changeDirectionWithCode)
    },[])
    function changeDirection(target){
        let newDirection = target.dataset.direction
        setDirection(newDirection)
        // console.log(newDirection)
    }
    function changeDirectionWithCode(event){
        let direction = event.keyCode
        switch(direction){
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
    function runGame(){
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
            checkWallCollision(loop)
        }, 300)
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
        
        function checkWallCollision(loop){
            if(snake.x < 0 || snake.x >= props.width || snake.y < 0 || snake.y >= props.height){
                console.log('Collision with wall.')
                stopGame(loop)
            }
        }
        function growSnake(){
            let newEaten = REF_EATEN.current
            newEaten++
            addEaten(newEaten)
        }
        function stopGame(loop){
            clearInterval(loop)
        }
    }
    
    function generateFood(){
        let random1 = Math.floor((Math.random()*props.width) - 1)
        let remainder1 = random1 % props.blockSize
        random1 = random1 - remainder1
        setFoodx(random1)
        let random2 = Math.floor((Math.random()*props.height) - 1)
        let remainder2 = random2 % props.blockSize
        random2 = random2 - remainder2
        setFoody(random2)
    }
    
    
    return (
        <div>
            <div id="game-elements" ref={gameElementsRef} style={{width:`${props.width}px`, height:`calc(${props.height}px - 160px)`, border:'1px solid yellow'}}>
                <SnakeHead frame={frame} x={posX} y={posY} snake={snake} blockSize={props.blockSize}></SnakeHead>
                <FoodElement frame={frame} left={foodx} top={foody} blockSize={props.blockSize}></FoodElement>
                {
                    tailState.map((content, index)=>{
                           return( 
                           <div style={{width:`${props.blockSize}px`, height:`${props.blockSize}px`, background:'red'}}>
                               
                           </div>)
                        
                    })
                }
            </div>
            <div style={{height: '160px', position:'relative'}}>
                <ArrowControls  direction={direction} changeDirection={changeDirection}></ArrowControls>
                <ScoreView eaten={REF_EATEN.current}></ScoreView>
            </div>
        </div>
    )
}
