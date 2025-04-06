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
    let obj1Array = toArray(obj1).sort(),
        obj2Array = toArray(obj2).sort();

    console.log(obj1Array, obj2Array);
    console.log(arrayEquals(obj1Array, obj2Array));
    return arrayEquals(obj1Array, obj2Array);
}

function toArray(object) {
    let objectArray = [];

    if (typeof object === 'number') {
        objectArray.push(object)
    }

    for (const [key, value] of Object.entries(object)) {
        if (key) {
            objectArray.push(key.toString());
        }

        if ((typeof value === 'object' && value != null) || Array.isArray(value)) {
            objectArray.push(toArray(value));
        }
        else {
            objectArray.push(value);
        }
    }

    return objectArray;
}

function arrayEquals(obj1, obj2) {
    if (!Array.isArray(obj1) || !Array.isArray(obj2)) {
        return false;
    }

    if (obj1.length !== obj2.length) {
        return false;
    }

    return obj1.every((val, index) => {
        if (Array.isArray(val) && Array.isArray(obj2[index])) {
            return arrayEquals(val, obj2[index]);
        }
        return val === obj2[index];
    });
}

// Inputs
deepEqual(1, 1); // true
deepEqual({a: 1}, {a: 1}); // true
deepEqual({a: 1}, {a: 2}); // false
deepEqual([1, 2, 3], [1, 2, 3]); // true
deepEqual({a: {b: 2}}, {a: {b: 2}}) // true
deepEqual({a: {b: 2}}, {a: {b: 3}}) // false
deepEqual({a: 1, b: 2}, {b: 2, a: 1}) // true