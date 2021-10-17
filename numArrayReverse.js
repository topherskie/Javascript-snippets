//Node.js 10.14.0
//Plain Javascript and Node.js is supported
// html/css is not supported here 
// codewars solution -

// split into 1 digit 
  // den usse numbers.sort to sort numbers
  // descending
function descendingOrder(nums){
    
    if (typeof nums === 'string') {
        return 'Cannot be process! This is a STRING!';
    } 
    
    const output = [];
    const resultNums = nums.toString();
  
    for(let i = 0; i < resultNums.length; i++) {
        output.push(parseInt(resultNums[i]))
    }
    
        const outputReverse = output.sort();
        const removeDuplicate = outputReverse;
    
    const uniqueArray = removeDuplicate.filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
})
    
    return uniqueArray.reverse();
    
} // end of decendingOrder func

console.log(descendingOrder(1234567890));
