
let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

//a
  cargoHold[5]='space tether';
  console.log("A. ["+cargoHold+"]");

//b
  cargoHold.pop();
  console.log("B. ["+cargoHold+"]");

//c
  cargoHold.shift();//leftshift
  console.log("C. ["+cargoHold+"]");

//d
  cargoHold.unshift(1138);
  cargoHold.push('20 meters');
  console.log("D. ["+cargoHold+"]");

//e
console.log("E. The array is ["+ cargoHold +"] has a length of "+ cargoHold.length +".");
