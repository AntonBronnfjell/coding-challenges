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
    return [];
}


// Examples:
flattenArray([1, [2, 3], [4, [5, 6]]])
// Output: [1, 2, 3, 4, 5, 6]

flattenArray([[["a"]], [["b"]]])
// Output: ["a", "b"]

flattenArray([1, [2, [3, [4]], 5]])
// Output: [1, 2, 3, 4, 5]