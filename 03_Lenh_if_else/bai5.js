
function Findxy(a,b,c){
    var delta = b**2 - 4 * a * c;

    if (delta == 0) {
        var x = -b/(2*a)
        console.log('Phuong trinh co nghiem kep x= ', x)
    
    }
    else if (delta > 0 ) {
        var x1=(-b + Math.sqrt(delta))/2
        var x2 =(-b - Math.sqrt(delta))/2  
        console.log('Phuong trinh co nghiem x1= ', x1)
        console.log('Phuong trinh co nghiem x2= ', x2)
    }
    else {
        console.log('phuong trinh vo nghiem')
    }
    // else {
    //     console.log('Phuong trinh co vo so nghiem')
    // }
            
    };
    

Findxy(1,0,0)

