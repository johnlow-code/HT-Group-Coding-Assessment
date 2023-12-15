function arrange(array) {
    let result = [];        // Initialise the result array
    while (array.length > 0) {  //Iterates the following 1,2,3,4 until the array is empty
        
        //1. Removes the first row of an array
        result = result.concat(array.shift());
        
        //2. Goes through each row and pops the last element. Thus Removing all last numbers of each row/ last column
        if (array.length > 0 && array[0].length > 0) {
            for (let i = 0; i < array.length; i++) {
                result.push(array[i].pop());
            }
        }
        
        //3. Removes the last row of an array and reverses it
        if (array.length > 0) {
            result = result.concat(array.pop().reverse());
        }
        
        //4. Goes through each row and shifts the first element. Thus removing the first numbers of each row.
        if (array.length > 0 && array[0].length > 0) {
            for (let i = array.length - 1; i >= 0; i--) {
                result.push(array[i].shift());
            }
        }
    }
    return result;
}

function main() {
    // Example usage:
    const array = [[1,2,3],
                   [4,5,6],
                   [7,8,9]];

    const result = arrange(array);
    console.log(result);
    // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
}

main()