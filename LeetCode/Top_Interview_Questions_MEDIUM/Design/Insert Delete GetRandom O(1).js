/**
 * Initialize your data structure here.
 */

class RandomizedSet {
  constructor() {
    this.valMap = new Map();
    this.indexMap = new Map();

    this.highest = -1;
  }

  /**
   * Inserts a value to the set. Returns true if the set did not already contain the specified element.
   * @param {number} val
   * @return {boolean}
   */
  insert(val) {
    if (this.valMap.has(val)) return false;

    this.highest++;
    this.valMap.set(val, this.highest);
    this.indexMap.set(this.highest, val);

    return true;
  }

  /**
   * Removes a value from the set. Returns true if the set contained the specified element.
   * @param {number} val
   * @return {boolean}
   */
  remove(val) {
    if (!this.valMap.has(val)) return false;

    const currIdx = this.valMap.get(val);
    const valAtLastIdx = this.indexMap.get(this.highest);
    this.indexMap.set(currIdx, valAtLastIdx);
    this.valMap.set(valAtLastIdx, currIdx);
    this.valMap.delete(val);
    this.indexMap.delete(this.highest);

    this.highest -= 1;

    return true;
  }

  /**
   * Get a random element from the set.
   * @return {number}
   */

  generateRandom() {
    return Math.floor(Math.random() * (this.highest + 1));
  }

  getRandom() {
    if (this.highest < 0) return null;

    const random = this.generateRandom();
    return this.indexMap.get(random);
  }
}
/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
