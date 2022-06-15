Object.prototype.hash = function(string) {
  const stringArray = string.split('.');
  let destObject = obj;
  let caunt = 0;
  while (caunt < stringArray.length){
    destObject = destObject[stringArray[caunt]];
    if (destObject === undefined) {break;}
    caunt++;
  }
  return destObject;
}



var obj = {
    person: {
      name: 'joe',
      history: {
        hometown: 'bratislava',
        bio: {
          funFact: 'I like fishing.'
        }
      }
    }
  };
  
console.log(obj.hash('person.name')); // 'joe'
 console.log(obj.hash('person.history.bio')); // { funFact: 'I like fishing.' }
  console.log(obj.hash('person.history.homeStreet')); // undefined
  //obj.hash('person.animal.pet.needNoseAntEater'); // undefined