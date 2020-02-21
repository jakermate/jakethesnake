export default class Food{
    width
    height
    x
    y
    constructor(width, height, blockSize){
        this.blockSize = blockSize
        this.width = width
        this.height = height
    }
    
    generate(){
        let random = Math.floor((Math.random()*this.width) - 1)
        let remainder = random % this.blockSize
        random = random - remainder
        this.x = random
        random = Math.floor((Math.random()*this.height) - 1)
        remainder = random % this.blockSize
        random = random - remainder
        this.y = random
        console.log(`Food spawned at ${this.x}, ${this.y}`)
    }
}