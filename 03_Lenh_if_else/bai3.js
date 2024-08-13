

function findMax(a,b,c){
    if(a>b && a>c){
        return a;
    }
    else if ( b>a&&b>c){
        return b;
    }
    else {
        return c;
    }
};
let max = findMax(1,12,12);
console.log("MAX = ", max)

