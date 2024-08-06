// x: Int;
// y: Float;
// z: Char;
let x = true;
let y = 12.1;
let z = 'aa';
// console.log(x, 'la so nguyen');
// console.log(y, 'la so thuc');
// console.log(z, ' la ky tu');

function printTypeof(a) {
    if (typeof (a) == 'number' && Math.floor(a) == a) {
        console.log(a, ' is Interger');
    }
    else if (typeof (a) == 'string') {
        console.log(a, 'is String');

    } 
    else if (typeof (a) == 'number') {
        console.log(a, 'is Float');
    }
    else if (typeof (a) == 'boolean') {
        console.log(a, 'is Boolean');
    }
    else{
        console.log('Exception');
    }
    
};

printTypeof(x);
printTypeof(y);
printTypeof(z);
