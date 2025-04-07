////////////////////////////////////////////////
//// Coding Challenge: Flatten Nested Array ////
////////////////////////////////////////////////

// Difficulty: Medium
// Problem Statement
//
// Write a function that takes an array
// which may contain nested arrays of
// arbitrary depth, and returns a
// flattened version of that array
// (i.e., all elements in a single-level
// array).
//
// Constraints
//    • You may not use Array.prototype.flat()
//      or .toString()/.split().
//    • Your solution should be recursive
//      or use an explicit stack.
//

function flattenArray(arr: any[]): any[] {
    let flatArray: any[] = [];
    arr.forEach(value => {
        if (Array.isArray(value)) {
            flatArray = flatArray.concat(flattenArray(value));
        } else {
            flatArray.push(value);
        }
    });
    return flatArray;
}

// Examples:
console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));
flattenArray([1, [2, 3], [4, [5, 6]]])
// Output: [1, 2, 3, 4, 5, 6]

console.log(flattenArray([[["a"]], [["b"]]]));
flattenArray([[["a"]], [["b"]]])
// Output: ["a", "b"]


console.log(flattenArray([1, [2, [3, [4]], 5]]));
flattenArray([1, [2, [3, [4]], 5]])
// Output: [1, 2, 3, 4, 5]