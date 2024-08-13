let a=5;
let b=30;
let c=4; 
let d=12;
let e=1;

function findMax(a, b, c, d, e) {
    let max = a;
    if (max < b) {
        max = b;
    }
    if (max < c) {
        max = c;
    }
    if (max < d) {
        max = d;
    }
    if (max < e) {
        max = e
    }
    return max;
}
let MAX=findMax(a,b,c,d,e);
console.log('Gia tri lon nhat la', MAX);