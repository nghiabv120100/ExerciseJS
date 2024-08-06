let a = -1;
let b = -1;
let c = -2;

// findMin(a,b,c);
// findMid(a,b,c);
// findMax(a,b,c); 

function findMin(a, b, c) {
    if (a <= b && a <= c) {
        return a;
    }
    else if ( b <= a && b <= c){
        return b;
    }
    else {
        return c;

    }
}

function findMax(a, b, c) {
    if (a>=b && a >= c){
        return a;
    }
    else if (b >= a && b>= c){
        return b;
    }
    else{
        return c;
    }
    
};
      
function findMid(a, b, c) {
    let min = findMin(a, b, c);
    let max = findMax(a, b, c);
    if(a> min && a<max){
        return a;
    }
    else if ( b > min && b<max){
        return b;
    }
    else {
        return c;
    }
}

let mid = findMid(a, b, c);
let min = findMin(a, b, c);
let max = findMax(a, b, c);

console.log('Order by asc',min , mid , max);
console.log('Order by desc',max, mid, min);

