export default class Snake{
    direction = 'down'
    x
    y
    length = 0
    tail = []
    blockSize
    id="snake-head"
    snakeComponent
    constructor(width, height, blockSize){
        this.blockSize = blockSize
        this.x = (width / 2) - ((width / 2) % this.blockSize)
        this.y = (height / 2) - ((height / 2) % this.blockSize)
        window.addEventListener('keydown',this.changeDirectionWithCode)
        this.snakeComponent = document.getElementById('snake-head')

    }
    grow(){
        this.length++
        console.log(this.length)
       
    }
    changeDirection(directionString){
        switch(directionString){
            case 'up':
                this.direction = 'up'
                break
            case 'down':
                this.direction = 'down'
                break
            case 'left':
                this.direction = 'left'
                break
            case 'right':
                this.direction = 'right'
                break
            default:
                break
        }
        // console.log('New direction: '+this.direction)
    }
    start(){
        setInterval(()=>{
            this.updateLocation()
            this.moveSnake()
        }, 1000)
    }
    updateLocation(){
        // console.log(this.direction)
        if(this.direction === 'up'){
            this.y -= this.blockSize
            console.log('moving up')
        }
        if(this.direction === 'down'){
            this.y += this.blockSize
            console.log('moving down')
        }
        if(this.direction === 'right'){
            this.x += this.blockSize
            console.log('moving right')
        }
        if(this.direction === 'left'){
            this.x -= this.blockSize
            console.log('moving left')
        }
        // console.log(`x: ${this.x}, y: ${this.y}`)
    }
    moveSnake(){
    }
    getLocation(){
        return {
            x: this.x,
            y: this.y
        }
    }
}