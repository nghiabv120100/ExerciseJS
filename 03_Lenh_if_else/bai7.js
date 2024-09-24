
//Tinh cuoc dien thoai cho ho gia dinh
function Calculation(m){
    var x = 25000;

    if (m <= 50){
        var y=x + 600*m
        console.log(' Phi tien dien thoai la =', y)
    } else if (m > 50 && m <=200){
        var y1= x+ (50*600)+((m-50)*400);
        console.log(' Phi tien dien thoai la =', y1)
    }
    else {
        var y2 =x+(50*600)+(150*400)+(m-200)*200;
        console.log('Phi tien dien thoai la=', y2)
    };
}
Calculation(170)