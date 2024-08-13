let x=4;
let y=2.5;

function calP(x,y){
    return x*y;
};
function calS(x,y){
    return x+y;
};

function calQ(x,y){
    let s = calS(x,y);
    let p = calP(x,y);
    return  q=s*s+p*(s-x)*(p+y);
};
console.log('Gia tri cua bieu thuc =', calP(x,y));
console.log('Gia tri cua bieu thuc =', calS(x,y));
console.log('Gia tri cua bieu thuc =', calQ(x,y));