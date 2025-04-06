##############################################
#### Coding Challenge: The Anagram Finder ####
##############################################

### Dificulty: Medium
### Problem Statement
# You're given a list of words and a target word.
# Your task is to write a function that returns all
# the anagrams of the target workd from the list.
#
# An anagram is a word phrase formed by
# rearranging the letters of a different word or
# phrase, typically using all  the original lettters
# exactly once.

# Inputs
target = "listen"
words = [
    "enlist",
    "google",
    "inlets",
    "banana",
    "silent",
    "tinsel",
    "listen"
    ]

def find_anagrams(target: str, words: list[str]) -> list[str]:
    result = []

    for word in words:
        anagram = True
        for character in word:
            if character not in target:
                anagram = False
        if anagram:
            result.append(word)
    return result
    #pass

def find_anagrams_improved(target: str, words: list[str]):
    result = []
    sorted_target = sorted(target)

    for word in words:
        if word != target and sorted(word) == sorted_target:
            result.append(word)

    return result


print(find_anagrams(target, words))
