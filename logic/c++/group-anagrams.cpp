//////////////////////////////////////////
//// Coding Challenge: Group Anagrams ////
//////////////////////////////////////////

// Difficulty: Medium
// Problem Statement
//
// Write a function that groups a list 
// of words into anagram groups. Two 
// words are anagrams if they contain 
// the same letters in a different order.
//
#include <iostream>
#include <vector>
#include <string>

using namespace std;

vector<vector<string>> groupAnagrams(vector<string>& strs) {

}

int main() {
    // Example
    vector<string> strs = {"eat", "tea", "tan", "ate", "nat", "bat"};
    vector<vector<string>> groupedAnagrams = groupAnagrams(strs);

    for (const auto& word : strs)
    {
        cout << word << " ";
    }
    cout << "\n" << endl;

    // Output
    for (const auto& group : groupedAnagrams) {
        for (const auto& word : group) {
            cout << word << " ";
        }
        cout << endl;
    }

    return 0;
}