export default class Body{
    x
    y
    constructor(){
        document.getElementById('game-elements').innerHTML += `<div class="body-segment"></div>`
    }
    move(x, y){
        this.x = x
        this.y = y
    }
}