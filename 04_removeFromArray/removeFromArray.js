const removeFromArray = function(arr, ...nums) {
    const newArray = arr.filter(element => !nums.includes(element));
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
