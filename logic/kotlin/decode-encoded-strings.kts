//////////////////////////////////////////////////
//// Coding Challenge: Decode Encoded Strings ////
//////////////////////////////////////////////////

// Difficulty: Medium
// Problem Statement
//
// You’re given an encoded string where patterns 
// follow the format k[encoded_string], where 
// the encoded_string inside the brackets is 
// repeated exactly k times.
//
// Write a function to decode the string and 
// return its plain version.
//

fun decodeString(s: String): String {

}


decodeString("3[a]2[bc]")          // Output: "aaabcbc"
decodeString("3[a2[c]]")           // Output: "accaccacc"
decodeString("2[abc]3[cd]ef")      // Output: "abcabccdcdcdef"
decodeString("abc3[cd]xyz")        // Output: "abccdcdcdxyz"