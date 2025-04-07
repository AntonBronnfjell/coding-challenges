//////////////////////////////////////
//// Coding Challenge: LRU Cache ////
/////////////////////////////////////

// Difficulty: Medium – Hard
// Problem Statement
//
// Design and implement a Least 
// Recently Used (LRU) Cache.
//
// An LRU cache evicts the least 
// recently used item when it reaches 
// capacity. You must implement the 
// following API:
//

public class LRUCache {
    public LRUCache(int capacity) {

    }

    public int get(int key) {
        return 0;
    }
    
    public void put(int key, int value) {

    }

    public static void main(String[] args) {
        LRUCache cache = new LRUCache(2);
        cache.put(1, 1);
        cache.put(2, 2);
        cache.get(1);       // returns 1
        cache.put(3, 3);     // evicts key 2
        cache.get(2);       // returns -1 (not found)
        cache.put(4, 4);     // evicts key 1
        cache.get(1);       // returns -1 (not found)
        cache.get(3);       // returns 3
        cache.get(4);       // returns 4
    }
}