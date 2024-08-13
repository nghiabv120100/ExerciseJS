/* 

Gtri x      Gtri y      Bieu Thuc       Ket qua

10          |5          |a=y+3          |a=8
10          |5          |a=y-2          |a=3
10          |5          |a=y*5          |a=25
10          |5          |a=x/y          |a=2
10          |5          |a=x%y          |a=0
*/

let x = 10;
let y = 5;
let a = y + 3;
let b = y - 3;
let c = y * 5;
let d = x / y;
let e = x % y;

console.log('Gtri x      Gtri y      Bieu Thuc       Ket qua')
console.log(x, '\t\t\t|' + y + '\t\t\t' + '|a=y+3' + '\t\t\t' + '|a=', a)
console.log(x, '\t\t\t|' + y + '\t\t\t' + '|a=y-2' + '\t\t\t' + '|a=', b)
console.log(x, '\t\t\t|' + y + '\t\t\t' + '|a=y*5' + '\t\t\t' + '|a=', c)
console.log(x, '\t\t\t|' + y + '\t\t\t' + '|a=x/y' + '\t\t\t' + '|a=', d)
console.log(x, '\t\t\t|' + y + '\t\t\t' + '|a=x%y' + '\t\t\t' + '|a=', e)