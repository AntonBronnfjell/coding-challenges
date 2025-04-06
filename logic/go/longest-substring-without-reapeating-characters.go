//////////////////////////////////////////////////////////////////////////
//// Coding Challenge: Longest Substring Without Repeating Characters ////
//////////////////////////////////////////////////////////////////////////

//Difficulty: Medium
// Problem Statement
//
// Write a function that takes a string
// and returns the length of the longest
// substring without repeating characters

package main

import "fmt"

func main() {
	lengthOfLongestSubstring("abcabcbb")   // Output: 3 ("abc")
	lengthOfLongestSubstring("bbbbb")      // Output: 1 ("b")
	lengthOfLongestSubstring("pwwkew")     // Output: 3 ("wke")
	lengthOfLongestSubstring("")           // Output: 0
	lengthOfLongestSubstring("abcdefg")    // Output: 7
}

func lengthOfLongestSubstring(text string) int {

}
