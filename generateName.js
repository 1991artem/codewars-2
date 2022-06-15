function generateName() {
    let str = "";
    let allc = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_ !@#$%^&*_(),.?|{}[]-=+\\/";
    for (let i = 0; i < 6; i++) {
      str += allc[~~(allc.length * Math.random())];
    }
    if (!photoManager.nameExists(str)) return str;
    return generateName();
  }