const sumAll = function(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b) || a<0 || b<0)
    {
        return "ERROR";
    }

    if(b<a)
    {
        let c=b;
        b=a;
        a=c;
    }

    let sum = 0;

    for(let i=a; i<=b; i++)
    {
        sum = sum + i;
    }

    return sum;

};


function isNumber(a)
{
    return (a instanceof Number);
}

// Do not edit below this line
module.exports = sumAll;
