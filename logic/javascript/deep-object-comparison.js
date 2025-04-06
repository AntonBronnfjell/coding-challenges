//////////////////////////////////////////////////
//// Coding Challenge: Deep Object Comparison ////
//////////////////////////////////////////////////

/// Dificulty: Medium - Hard
/// Problem Statement
//
// Write a function deepEqual(obj1, obj2)
// that checks if two values are deeply equal.
// The comparison should return true for:
// - Primitive values that are equal
// - Objects or arrays that have the same
//   structure and values recursively
//
// You cannot use JSON.stringfy or any
// external libraries.

function deepEqual(obj1, obj2) {

}

// Inputs
deepEqual(1, 1); // true
deepEqual({a: 1}, {a: 1}); // true
deepEqual({a: 1}, {a: 2}); // false
deepEqual([1, 2, 3], [1, 2, 3]); // true
deepEqual({a: {b: 2}}, {a: {b: 2}}) // true
deepEqual({a: {b: 2}}, {a: {b: 3}}) // false
deepEqual({a: 1, b: 2}, {b: 2, a: 1}) // true