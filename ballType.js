class Ball {
    constructor (ballType){
        if (ballType === undefined){
          this.ballType = 'regular';
        } else{
          this.ballType = ballType;
        }
    }
    ballType(){
        console.log(this.ballType);
    }
}
let ball1 = new Ball();
console.log (ball1.ballType);