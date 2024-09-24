function GrossSalary(a){
if(a > 15){
    var PerIncTax= a*30/100;
    console.log(' NetSalary =',a - PerIncTax);
} else if(a>=7 && a<=15){
    var PerIncTax1= a*20/100;
    console.log(' NetSalary1 =',a - PerIncTax1);
}
else {
    var PerIncTax2= a*10/100;
    console.log(' NetSalary2 =',a - PerIncTax2);
}
};
GrossSalary (10)
