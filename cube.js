class Cube {
    constructor(length){
        this.length = length;
    }
    get surfaceArea(){
        return this.length*this.length*6;
    }
    set surfaceArea(value){
        this.length = Math.sqrt(value/6);
    }
    get volume(){
        return this.length*this.length*this.length;
    }
    set volume (value){
        this.length = Math.cbrt(value);
    }
}



var cube = new Cube();

cube.volume = 125;
console.log (cube.volume);