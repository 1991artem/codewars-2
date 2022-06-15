Array.prototype.square  = function () { return this.map(function(numbers) { return numbers*numbers; }); }
Array.prototype.cube    = function () { return this.map(function(numbers) { return numbers*numbers*numbers; }); }
Array.prototype.average = function () { return this.sum() / this.length; }
Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }

var numbers = [1, 2, 3, 4, 5];

console.log(numbers.square(numbers));