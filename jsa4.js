
let holdCabinet1=['duct tape', 'gum', 3.14, false, 6.022e23];

let holdCabinet2=['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//a
console.log("A.");
console.log(holdCabinet1.concat(holdCabinet2));
console.log(holdCabinet1);

//b
console.log("B.");
console.log(holdCabinet1.slice(0,2));
console.log(holdCabinet2.slice(0,2));

//c
console.log("C.");
holdCabinet1.reverse();
holdCabinet2.sort();
console.log(holdCabinet1);
console.log(holdCabinet2);
