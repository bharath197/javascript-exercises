const sumAll = function(a, b) {
    if(a<0||b<0){
        return 'ERROR'
    }
    if(!Number.isInteger(a)||!Number.isInteger(b)){
        return 'ERROR'
    }
    if(b<a){
        return sumAll(b, a)
    }
    let sum= a
    for(let i = a+1; i<=b;i++){
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
