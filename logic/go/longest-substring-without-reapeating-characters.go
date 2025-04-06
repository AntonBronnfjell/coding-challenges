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
	var substring []string
	var existing []string

	if len(text) == 0 {
		fmt.Print("\n", 0, " ", substring)
		return 0
	}

	for _, character := range text {
		if !contains(substring, string(character)) {
			existing = append(existing, string(character))
			if len(existing) >= len(substring) {
				substring = existing
			}
		} else {
			existing = existing[:0]
		}
	}

	fmt.Print("\n", len(substring), " ", substring)
	return len(substring)
}

func contains(slice []string, item string) bool {
    for _, element := range slice {
        if element == item {
            return true
        }
    }
    return false
}