class MyHashSet {
  arr: number[] = [];
  constructor() {
    this.arr = [];
  }

  add(key: number): void {
    if (this.arr.includes(key)) {
      return;
    }
    this.arr.push(key);
  }

  remove(key: number): void {
    if (!this.arr.includes(key)) {
      return;
    }
    this.arr.splice(this.arr.indexOf(key), 1);
  }

  contains(key: number): boolean {
    if (this.arr.indexOf(key) === -1) {
      return false;
    } else {
      return true;
    }
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
