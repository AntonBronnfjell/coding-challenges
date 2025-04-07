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
#include <algorithm>

using namespace std;

vector<vector<string>> groupAnagrams(vector<string>& strs) {
    vector<vector<string>> result;

    for (size_t strs_index = 0; strs_index < strs.size(); ++strs_index)
    {
        string current_word = strs[strs_index];
        sort(current_word.begin(), current_word.end());

        if (result.empty()) {
            result.push_back(vector<string>{strs[strs_index]});
            
        }
        else {
            for (size_t result_index_column = 0; result_index_column < result.size(); ++result_index_column) {

                string list_word = result[result_index_column][0];
                sort(list_word.begin(), list_word.end());
    
                if (current_word == list_word)
                {
                    result[result_index_column].push_back(strs[strs_index]);
                    break;
                }
                else {
                    if (result[result_index_column + 1].empty()) {
                        result.push_back(vector<string>{strs[strs_index]});
                        break;
                    }
                }
            }
        }
    }
    
    return result;
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