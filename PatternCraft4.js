class Fly {
    move(unit) {
        return 10;
    }
  }
  class Walk {
    move(unit) {
      return 1;
    }
  }
  class Viking {
    constructor() {
        this.moveBehavior = new Walk();
        this.position = 0;
    }
    move() {
        this.position += this.moveBehavior.move();
    }
  }

  let viking = new Viking();
    console.log(viking.move());
    console.log(viking.position);
