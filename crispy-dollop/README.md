# Code Challenge - Crispy Dollop

## Problem Description

In this problem, we are required to find the next bigger number by rearranging the digits for a number given.

For example, if the input number is 213, the output will be 231 as it is the next biggest number with the same digits. (Other bigger number such as  312 is not the output as it is not the next bigger number after 213.)

## Solution

This solution consists of a few steps, and here is a step-by-step explanation of the algorithm:

### Step 1. Preprocessing: Convert the input number to an array of digits 

First, we will convert the input number to a array so that we can use the index of each digit to find and swap the numbers.

```
let number = Array.from(String(num), Number);
```

### Step 2. Find the rightmost digit which is smaller than the digit on its right

Then, we need to traverse the number from the the second rightmost digit, and keep traversing to the left until we find a digit which is smaller than the digit on the right. This is to find the "pivot" in the number, which will be swapped with a digit on the right to increase its value.

```
let i = number.length - 2; 
while (i >= 0 && number[i] >= number[i + 1]){
    i--;
}
```

  If the index reaches -1, that means no such digit aforementioned is foundthe number and given is the largest possible. This is when we break the while loop and return -1 to the user.

```
if (i === -1) {
    return -1;
}
```

### Step 3. Find the smallest digit greater than the digit found in Step 2 from the rightside of the digit.

After we have found the digit, we would have to find its substitute among the digits on its right so that we can swap both of them to form the next bigger number. 

To do this. we will find the index of the smallest digit to the right of the number at index i, but greater than it. This is to make sure than the new number swapped to the index i position will be the smallest greater substitute, as we want to find the next bigger number with the same digits. We will use the variable "smallest" to store the index of this substitute.

```
let smallest = i+1;
for(let j = i+1; j < number.length-1; j++ ) {
        if (number[j] > number[i] && number[j] <= number[smallest]) {
            smallest = j;
        }
}
```
  
### Step 4. Swap the positions of the two numbers

Swap the positions of number at index i and "smallest".

```
let temp = number[i];
number[i] = number[smallest];
number[smallest] = temp;
```


### Step 5. Sort the digits to the right of the number at index i in ascending order

If the number is not sorted, the resulting number might not be the smallest possible. Sorting the number to the right of number[i] will minimize the difference between the new number compared to the input number, thus producing the smallest possible next bigger number.

```
number = number.slice(0, i+1).concat(number.slice(i+1, number.length + 1).sort()) 
```

### Step  6. Convert the list of digits back to integer and return the result

The final step is to convert the array of digits into a number and return the result.

```
const result = parseInt(number.join(''), 10);
return result;
```

Another observation can be found in this algorithm is that the left part of the digit at index i remains untouched. This is to make sure that t

## Trade-offs and considerations

### 1. Handling of negative integers
This solution does not handle negative numbers, as the algorithm is only for finding the next bigger number for positive integers. For negative integer, there needs to be an algorithm that can find the next smaller number with the digits provided.

### 2. Performance improvements
A method is called to convert the input number to String for easier manipulation of the digits. Although this makes the code readable and simpler, it may have a slightly poorer performance compaed to a function with only numeric operations.

## Potential Improvements with Additional Time

### 1. User prompts when there is no next bigger number
Since the solution returns -1 when there is no next bigger number. It might benefit the user if an exception or a message prompt is thrown to address such cases.

### 2. Error Handling
Additional time can also be spent to implement input validation, to handle errors caused by invalid input such as characters.

### 3. Handling negative integers
To handle negative integers, another algorithm will be implemented to the following, when it detects a negative sign '-' in the input.

```

Step 1: Find the rightmost digit which is smaller than the digit on its right. We will name index of this digit as i.

Step 2: Find the largest digit smaller than the digit found in Step 2 from its right. The index of this digit will be named j.

Step 3: Swap the digits found in Step 1 and 2.

Step 4: Sort all of the digits to the right of the digit on index i in descending order.


```

Below is the full code in Javascript. Alternatively, please refer to scaling-umbrella.js for the full code.

```

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

```