Array.prototype.map = function(x){
    var newArray = [];
    for(var i=0; i < this.length; i++) {
      newArray.push(x(this[i],i));
    }
      return newArray;
  };

// function(cb) {
//     let arg = arguments;
//     return arg;
//   };

  let test = [1,2,3].map(x => 2 * x);
console.log(test);
// [1,2,3].map(x => 2 * x) === [2,4,6];
// [1,2,3].map(x => 2 ** x) === [2,4,8];
// [1,2,3].map(x => x.toString()) === ["1","2","3"];
// ["1","2","3"].map(x => parseInt(x)) === [1,2,3];
// ["random","array","to","be","mapped"].map(x => mapping(x)) === [mapping("random"),mapping("array"),mapping("to"),mapping("be"),mapping("mapped")];