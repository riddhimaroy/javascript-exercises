const repeatString = function(word, num) {
    let a ='';
    let i=0;

    if(num<0)
        return "ERROR";

    while(i<num)
    {
        a = a + word;
        i++;
    }

    return a;
};

// Do not edit below this line
module.exports = repeatString;
