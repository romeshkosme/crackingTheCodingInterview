// both string will be same length
// both string will only contain ASCII code only
class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  _hash(key) {
    return key.charCodeAt(key);
  }

  set(key, value) {
    const target = this._hash(key);
    this.table[target] = [key, value];
    this.size++;
  }

  get(key) {
    const target = this._hash(key);
    if (this.table[target]) {
      return this.table[target][1];
    }
    return false;
  }

  display() {
    for (let index = 0; index < this.table.length; index++) {
      if (this.table[index]) {
        console.log(this.table[index]);
      }
    }
  }
}
function checkPermutation(str1, str2) {
  const hashTable1 = new HashTable();
  const hashTable2 = new HashTable();
  for (let index = 0; index < str1.length; index++) {
    if (!hashTable1.get(str1[index])) {
      hashTable1.set(str1[index], 1);
    } else {
      hashTable1.set(str1[index], hashTable1.get(str1[index]) + 1);
    }
  }
  for (let index = 0; index < str2.length; index++) {
    if (!hashTable2.get(str2[index])) {
      hashTable2.set(str2[index], 1);
    } else {
      hashTable2.set(str2[index], hashTable2.get(str2[index]) + 1);
    }
  }
  //   hashTable1.display();
  //   hashTable2.display();
  let permutation = true;
  for (let index = 0; index < str1.length; index++) {
    if (hashTable1.get(str1[index]) === hashTable2.get(str1[index])) {
      continue;
    } else {
      permutation = false;
      break;
    }
  }
  console.log(permutation)
}

const TEST = [
  ["ala", "laa"],
  ["oyo", "yoy"],
  ["oyo", "ooy"],
];

for (const elem of TEST) {
  checkPermutation(elem[0], elem[1]);
}
