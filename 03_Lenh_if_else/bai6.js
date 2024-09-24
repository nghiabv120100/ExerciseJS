

function Turnover(x) {
    if (x <= 100) {
        var hh = x * 5 / 100;
        console.log('Hoa hong nhan duoc la 5% =', hh)
    } else if (x > 100 && x <= 300) {
        var hh1 = x * 10 / 100;
        console.log('Hoa hong nhan duoc la 10% =', hh1)
    }
    else {
        var hh2 = x * 20 / 100;
        console.log('Hoa hong nhan duoc la 20% =', hh2)
    }
};
Turnover(350)
