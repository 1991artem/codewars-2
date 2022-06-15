class Marine {
    constructor(_damage, _armor) {
      this.damage = _damage || 0;
      this.armor = _armor || 0;
    }
  }
  
  class MarineWeaponUpgrade {
    constructor(marine) {
      this.damage = marine.damage + 1;
      this.armor = marine.armor;
    }
  }
  
  class MarineArmorUpgrade {
    constructor(marine) {
      this.damage = marine.damage;
      this.armor = marine.armor + 1;
    }
  }
  
  let marine = new Marine(10, 1);
  console.log(new MarineWeaponUpgrade(marine).damage)