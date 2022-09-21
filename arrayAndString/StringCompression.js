function compression(str) {
  let verifyIndex = 0;
  let counter = 1;
  for (let index = 1; index < str.length; index++) {
    if (str[index] === str[verifyIndex]) {
      counter++;
      if (counter === 2) {
        str = `${str.slice(0,index)}${counter}${str.slice(index+1)}`
      } else {
        str = `${str.slice(0,index-1)}${counter}${str.slice(index+1)}`
        index--
      }
    } else {
      verifyIndex = index;
      counter = 1;
    }
  }
  console.log(str)
}

const TEST = ["cvb"];

for (const elem of TEST) {
  compression(elem);
}
