class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.cache = new Map();
    }
  
    get(key) {
      if (this.cache.has(key)) {
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
      }
      return -1;
    }
  
    put(key, value) {
      if (this.cache.has(key)) {
        this.cache.delete(key);
      } else if (this.cache.size >= this.capacity) {
        const oldestKey = this.cache.keys().next().value;
        this.cache.delete(oldestKey);
      }
      this.cache.set(key, value);
    }

    print() {
        this.cache.forEach((value, key) => {
            console.log(`Key: ${key}, Value: ${value}`);
          });
    }
  }

  cache = new LRUCache(6)

  cache.put('a', 10)
  cache.put('b', 10)
  cache.put('c', 10)
  cache.put('d', 10)
  cache.put('e', 10)
  cache.put('f', 10)
  cache.put('g', 10)
  cache.print()