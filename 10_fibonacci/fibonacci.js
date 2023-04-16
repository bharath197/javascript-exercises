const fibonacci = function(a) {
    if(a<=0) return 'OOPS'
    if(a==1||a==2) return 1
    for(let i = 1; i<=a; i++){
        return fibonacci(a-1) + fibonacci(a-2)
    }
};

// Do not edit below this line
module.exports = fibonacci;
