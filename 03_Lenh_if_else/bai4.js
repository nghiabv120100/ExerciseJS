
function Level(a,b,c) {
    let DTB=(a+b+c)/3;

if(DTB>=9.0){
    console.log('HANG A');
}
else if(DTB >=7.0 && DTB <9.0){
    console.log('HANG B')
}
else if ( DTB >=5.0 && DTB <7.0){
    console.log('HANG C')
}
else(
    console.log('HANG F')
)
};

 Level(1,8,10);
