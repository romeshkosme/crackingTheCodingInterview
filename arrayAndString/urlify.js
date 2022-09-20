// using new data structure (string)
// function urlify(str, len) {
//   let url = "";
//   for (let index = 0; index < len; index++) {
//     if (str[index] === " ") {
//       url += "%20";
//     } else {
//       url += str[index]
//     }
//   }
//   console.log(url);
// }
// by modifying the string
function urlify(str, len) {
  for (let index = 0; index < str.length; index++) {
    if (str[index] === " ") {
      str = `${str.slice(0, index)}%20${str.slice(index+1)}`
    }
  }
  console.log(str, str.length)
}

const TEST = [["mr john smith", 13]];

for (const elem of TEST) {
  urlify(elem[0], elem[1]);
}
