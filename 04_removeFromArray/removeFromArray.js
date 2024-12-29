const removeFromArray = function(...args) {
    let arr = args[0];
    let n = args.length;

    for(let i = 1; i < n; i++)
    {
        let x = args[i];

        let j=0;
        while(j<arr.length)
        {
            if(arr[j] === x)
            {
                arr.splice(j, 1);
                j--;
            }
            j++;
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
