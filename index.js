var number = function (a,n ){
if(n === 0) {
    return 1;
}else{
    return a*number(a,n-1);
}
}
console.log(number(16,4));