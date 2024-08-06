let a = 2;
let b = 56;
let c = 20;

// findMin(a,b,c);
// findMid(a,b,c);
// findMax(a,b,c); 
function findMin(a, b, c) {
    if (a < b && a < c) {
        return a;
    }
    else if ( b <a && b < c){
        return b;
    }
    else {
        return c;

    }
        
    };
function findMid(a, b, c) {
    if (a > b && a < c) {
        return a;
    }
    else if (b > a && b < c){
        return b;
    }
    else {
        return c;
    }
};
function findMax(a, b, c) {
    if (a>b && a >c){
        return a;
    }
    else if (b >a && b> c){
        return b;
    }
    else{
        return c;
    }
    
};

let min = findMin(a, b, c);
let mid = findMid(a, b, c);
let max = findMax(a, b, c);

console.log('thu tu tang dan la',min , mid , max);
console.log('Thu tu tang dan la',max, mid, min);

