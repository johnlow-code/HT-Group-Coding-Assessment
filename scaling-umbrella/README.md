# Code Challenge - Scaling Umbrella

## Problem

In this scaling umbrella problem, we need to take a n x n array and traverse it in a clockwise spiral order. The output will be an array of arranged elements from the outermost layer to the middle element while moving in a clockwise direction.

For example, given an example array:

```
const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```
The expected output has to be [1,2,3,6,9,8,7,4,5]

## Solution

The solution involves iterating over the outer layers of the array in a clockwise direction and appending the elements to a result array. I will be using array methods such as pop and shift to extract elements from the outer layers in a clockwise order and concat to build the final result array.

Starting from the first element, the function iteratively performs these four steps until all elements in the array are extracted into the result array.

### 1. Traversing RIGHT

The function pops the first row by using the shift() method. The shift()method removes the first element from an array and returns the removed element. 

```
result = result.concat(array.shift()); 
```

In this case, the array.shift() removes the first row of the array and concatenate it in the result array.

### 2. Traversing DOWN

The function pops the last element from each remaining row. The pop()method removes the last element from an array and returns the removed element.

```
 if (array.length > 0 && array[0].length > 0) {
     for (let i = 0; i < array.length; i++) {
        result.push(array[i].pop());
    }
}
```

The code snippet above loops through each remaining row and pops the last element from each remaining row into the result array.

### 3. Traversing LEFT

The function pops the last row in reverse order.

```
if (array.length > 0) {
    result = result.concat(array.pop().reverse());
}
```

The array.pop() method removes the last row of the array. The reverse() method modifies the array and returns a reference to the reversed array, as the elements in the removed row in this step has to be reversed before it is concatenated into the result array.

### 4. Traversing UP
The function pops the first element from each remaining row.

```
if (array.length > 0 && array[0].length > 0) {
    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i].shift());
        }
    }
```

The code snippet above will remove the first element from the last row of the array to the first row of the array, and pushes the removed elements into the result array.

These four steps will be iterated until the array is empty.
In each steps, the elements extracted/popped will be concatenated into the result array. 

### Reason for using pop and shift:
Since numbers of the next array has to be followed consecutively, using pop and shift would prevent any duplicate elements to be pushed into the result array.

### Difference in the concat() method and push() method:
In this Javascript code, I have utilised both push() and concat() method, to add elements/array into the result array, as they have difference in the types of application.

The push() method adds one or more elements to the end of an array.

The concat() method merges two or more arrays. However, it does not change the existing arrays but instead returns a new array. Therefore, I have made sure that the changes are made to the result array by assigning the new result array.

## Trade-offs and considerations

### 1. Input Validation
If the user enters non-numeric or invalid values, the function might not handle the input gracefully.

### 2. Error Handling
The function assumes a well-formed array for its input, without error-handling for edge cases such as empty array and non-square arrays.

### 3. Modification of the Input Array
This function alters the original array. Although this allows the solution to be more efficient, it might not be desirable if the original array has to be preserved.

## Potential Improvements with Additional Time

### 1. User Experience
If I were to spend additional time on the problem, I would improve the user-friendliness, by adding a function where the user will be prompted if the array entered is not of shape n x n. I would also add a function where it will help the user to key in the values of the array from the terminal.

Below would be the pseudocode for the added functionality.

```

function isSquareArray(arr):
    // Checks if the array is a square array 
    return arr.length === arr[0].length AND  arr.length > 0

function inputArray():
    // Prompt the user to enter an array
    PRINT "Enter the number of rows and columns (n x n):"
    LET n = INPUT
    LET array = []

    FOR i FROM 0 TO n-1:
        FOR j FROM 0 to n-1:
            PRINT "Enter value for element at index (" + i + "," + j + ")
            LET array[i][j] = INPUT

    RETURN array


function arrange(array):
    // The function that we have created before goes here
    RETURN result

function main(): 
    LET array = inputArray()

    IF isSquareArray(array):
        LET result = arrange(array)
        PRINT result

    ELSE:
        PRINT "Please enter a square array. Your array size is " + array.length + " by " + arr[0].length
    
```

### 2. Code Structure
Refactor the code to separate concerns and making it modular. For example, seperate the traversing RIGHT, DOWN, LEFT, UP into its own functions. 

### 3. Efficiency
Explore and implement more efficient algorithms for the clockwise spiral arrangement, especially for larger arrays.

Below is the full code in Javascript. Alternatively, please refer to scaling-umbrella.js for the full code.

```

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

```
