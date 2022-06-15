class SiegeState {
    constructor() {
    this.canMove = false;
    }
  }
  class TankState {
    constructor() {
      this.canMove = true;
    }
  }
  class Tank {
    constructor() {
    this.state = new TankState();
    }
    get canMove() {
      return  this.state.canMove;

     }
    get damage() {
      return  this.state.canMove? 5:20;
     }
  }

  let tank = new Tank();
  //tank.state = new SiegeState();
  console.log (tank.canMove);
  //console.log (tank.damage);

  //return visitor.visitLight(this);