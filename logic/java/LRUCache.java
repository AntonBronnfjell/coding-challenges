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
import java.io.Console;
import java.util.*;

public class LRUCache {
    private final int capacity;
    private final Map<Integer, Integer> cache;
    private final LinkedHashSet<Integer> order;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.cache = new HashMap<>();
        this.order = new LinkedHashSet<>();
    }

    public int get(int key) {
        if (!cache.containsKey(key)) {
            return -1;
        }
        order.remove(key);
        order.add(key);
        return cache.get(key);
    }
    
    public void put(int key, int value) {
        if (cache.size() >= capacity) {
            int oldest = order.iterator().next();
            order.remove(oldest);
            cache.remove(oldest);
        }
        cache.put(key, value);
        order.remove(key);
        order.add(key);
    }

    public static void main(String[] args) {
        LRUCache cache = new LRUCache(2);
        cache.put(1, 1);
        cache.put(2, 2);
        System.out.println(cache.get(1));
        cache.get(1);           // returns 1
        cache.put(3, 3);  // evicts key 2
        System.out.println(cache.get(2));
        cache.get(2);           // returns -1 (not found)
        cache.put(4, 4);  // evicts key 1
        System.out.println(cache.get(1));
        cache.get(1);           // returns -1 (not found)
        System.out.println(cache.get(3));
        cache.get(3);           // returns 3
        System.out.println(cache.get(4));
        cache.get(4);           // returns 4
    }
}