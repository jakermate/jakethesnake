export default class Snake{
    direction = "right"
    x
    y
    length = 0
    constructor(){
        
    }
    changeDirection(keyCode){
        let direction = keyCode
        if(direction === 38 ){
            this.direction === 'up'
        }
        if(direction === 40 ){
            this.direction === 'down'
        }
        if(direction === 37 ){
            this.direction === 'left'
        }
        if(direction === 39 ){
            this.direction === 'right'
        }
    }
}