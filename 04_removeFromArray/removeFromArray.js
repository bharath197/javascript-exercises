const removeFromArray = function(arr, ...args) {
    return arr.filter(i=>!args.includes(i))
};

// Do not edit below this line
module.exports = removeFromArray;
