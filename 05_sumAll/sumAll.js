const sumAll = function(min,max) {
    if( min < 0 || max < 0){
        return "ERROR"
    }
    else if(typeof min !== 'number' || typeof max !== 'number'){
        return "ERROR"
    }
    else if(isNaN(min) || isNaN(max)){
        return "ERROR";
    }
    else if(!Number.isInteger(min) || !Number.isInteger(max)){
        return "ERROR";
    }
    let result = 0;
    const start = Math.min(min,max);
    const end = Math.max(min,max);
    for(i = start; i <= end; i++){
        result += i;
        
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
