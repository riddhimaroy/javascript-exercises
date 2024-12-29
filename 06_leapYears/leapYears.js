const leapYears = function(x) {
    if(x%400==0)
        return true;
    return (x%4==0 && x%100!=0);
};

// Do not edit below this line
module.exports = leapYears;
