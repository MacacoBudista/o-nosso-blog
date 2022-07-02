function Counter() {
  this.sum = 0;
  this.count = 0;
}

Counter.prototype.add = function(array) {
  array.forEach(function countEntry(entry) {
    this.sum += entry; 
    ++this.count;
  }, this);
};

const obj = new Counter();
obj.add([2,3,4,5,5,6]);
console.log(obj.count obj.sum)

