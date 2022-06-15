Array.prototype.reduce = function(process, element) {
  for (let i = 0; i < this.length; i++) {
    if (!element){
      if(typeof this[i] !== 'number'){
        element = '';
      } else {
        element = 0;
      }
    }
    element =  process(element, this[i]);
 }
 return element
}

  let test  = [2,3,4,5].reduce(function(sum, next){return sum+next});

  console.log(test);

  let test2 = ['a','y','!'].reduce(function(x,y){return x+y}, 'y');

  console.log(test2);