
let str = 'In space, no one can hear you code.';

//a
console.log("A.");
console.log(str.split());
console.log(str.split('e'));
console.log(str.split(' '));
console.log(str.split(''));

//b
let arr = ['B', 'n', 'n', 5];
console.log("B.");
console.log(arr.join());
console.log(arr.join('a'));
console.log(arr.join(' '));
console.log(arr.join(''));


//c
console.log("C.");
console.log(str.split(',').sort().join(','));


