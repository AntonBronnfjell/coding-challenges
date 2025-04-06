/////////////////////////////////////////////
//// Coding Challenge: Valid Parentheses ////
/////////////////////////////////////////////

//Difficulty: Easy to Medium
// Problem Statement
//
// Write a function that determines if
// a string made up of brackets is valid.
//
// A string is valid if:
//	•	Every opening bracket has a corresponding
//      closing bracket of the same type.
//	•	Brackets are closed in the correct order
//

fn main() {
    is_valid("()".to_string());       // true
    is_valid("()[]{}".to_string());    // true
    is_valid("(]".to_string());        // false
    is_valid("([)]".to_string());      // false
    is_valid("{[]}".to_string());      // true
}

fn is_valid(text: String) -> bool {
    let mut auxiliar = vec![];

    for character in text.chars() {
        match character {
            '(' | '{' | '[' => {
                auxiliar.push(character);
            },
            bracket if (bracket == ')' && auxiliar.last() != Some(&'('))
                || (bracket == '}' && auxiliar.last() != Some(&'{'))
                || (bracket == ']' && auxiliar.last() != Some(&'[')) => {
                println!("{}", false);
                return false;
            },
            _ => { auxiliar.pop(); },
        }
    }
    println!("{}", auxiliar.is_empty());
    return auxiliar.is_empty();
}
