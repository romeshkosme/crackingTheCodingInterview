// without using extra data structure
function unique(str) {
  const hashTable = new HashTable();
  let unique = true;
  for (let i = 0; i < str.length; i++) {
    if (!hashTable.get(str[i])) {
      hashTable.set(str[i], 1);
    } else {
      hashTable.set(str[i], hashTable.get(str[i]) + 1);
      unique = false;
    }
  }
  // hashTable.display();
  console.log(`${str}: ${unique}`);
}

// using hashtable
class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }
  _hash(key) {
    let hash = 0;
    for (let index = 0; index < key.length; index++) {
      hash += key.charCodeAt(index);
    }
    return hash;
  }

  get(key) {
    const target = this._hash(key);
    if (this.table[target] && this.table[target].length) {
      for (let index = 0; index < this.table[target].length; index++) {
        if (this.table[target][index][0] === key) {
          return this.table[target][index][1];
        }
      }
    }
    return false;
  }

  set(key, value) {
    const target = this._hash(key);
    if (this.table[target] && this.table[target].length) {
      for (let index = 0; index < this.table[target].length; index++) {
        if (this.table[target][index][0] === key) {
          this.table[target][index][1] = value;
          return;
        }
      }
      this.table[target][index].push([key, value]);
    } else {
      this.table[target] = [[key, value]];
    }
  }
  display() {
    for (let index = 0; index < this.table.length; index++) {
      // console.log(this.table[index])
      if (this.table[index] && this.table[index].length) {
        this.table[index].forEach(([key, value], index) => {
          console.log(key, value);
        });
      }
    }
  }
}

const TEST = ["hello", "world", "asfghja", "mkalsd", "lld"];

for (const elem of TEST) {
  unique(elem);
}
