class MarioAdapter {
    constructor(mario) {
        this.demage = mario;
    }
    attack(target) {
        target.health -= this.demage.jumpAttack();
    }
  }
