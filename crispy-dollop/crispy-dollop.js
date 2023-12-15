function nextNumber(num) {
    
    // 1. Convert the numbers to an array of digits.
    let number = Array.from(String(num), Number);

    // 2. Find the rightmost digit that is smaller than the digit to its right
    let i = number.length - 2; // Inititalise the index
    while (i >= 0 && number[i] >= number[i + 1]){
        i--;
    }

    // If no such digit aforementioned is found, there is no next bigger number. Returns -1
    if (i === -1) {
        return -1;
    }

    // 3. Find the smallest digit to the right of number[i] BUT GREATER than number[i]
    let smallest = i+1;
    for(let j = i+1; j < number.length-1; j++ ) {
            if (number[j] > number[i] && number[j] <= number[smallest]) {
                smallest = j;
            }
    }

    // 4. Swap the positions of number at index i and "smallest" 
    let temp = number[i];
    number[i] = number[smallest];
    number[smallest] = temp;


    // 5. Sort the digits to the right of the new number[i] in ascending order
    number = number.slice(0, i+1).concat(number.slice(i+1, number.length + 1).sort()) 

    // 6. Convert the list of digits back to integer and return the result
    const result = parseInt(number.join(''), 10);
    return result;
}

function main() {
    // Examples
    console.log(nextNumber(12))    // returns 21
    console.log(nextNumber(513))   // Output: 531
    console.log(nextNumber(2017))  // Output: 2071
    console.log(nextNumber(9))    // Output: -1
    console.log(nextNumber(111))   // Output: -1
    console.log(nextNumber(531))  // Output: -1
}

main()
