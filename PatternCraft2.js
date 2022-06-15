class Marine {
    constructor() {
        this.health = 100;
    }
    accept(visitor) {
        return visitor.visitLight(this);
    }
  }
  class Marauder {
    constructor() {
      this.health = 125;
    }
    accept(visitor) {
        return visitor.visitArmored(this);
    }
  }
  class TankBullet {
    visitLight(unit) {
        return (unit.health -= 21);
    }
    visitArmored(unit) {
        return (unit.health -= 32);
    }
  }

  let bullet = new TankBullet();
  let light = new Marine();
  let armored = new Marauder();

  light.accept(bullet);
  console.log(light.health);
