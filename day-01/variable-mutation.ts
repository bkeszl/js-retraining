export {};
'use strict';

let a: number = 3;
// make it bigger by 10
a += 10;
console.log(a);

let b: number = 100;
// make it smaller by 7
b -= 7;
console.log(b);

let c: number = 44;
// double c's value
c *= 2;
console.log(c);

let d: number = 125;
// divide d's value by 5
d /= 5;
console.log(d);

let e: number = 8;
// what's the cube of e's value?
e = e * e * e;
console.log(e);

let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)
console.log(f1 > f2);
let g1: number = 350;
let g2: number = 200;
// tell if the double of g2 is bigger than g1 (pras a boolean)
console.log(g1  < g2 * 2);
let h: number = 1357988018575474;
// tell if 11 is a divisor of h (as a boolean)
console.log(h % 11 == 0);
let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
console.log(i1 > i2*i2 && i1 < i2*i2*i2);
let j: number = 1521;
// tell if j is divisible by 3 or 5 (as a boolean)
console.log(j % 3 == 0 || j % 5 == 0)
