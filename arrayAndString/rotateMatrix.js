function rotateMatrix(matrix) {
  const N = matrix.length;
  const arr = []
  const tempArr = []
  for (let i = 0; i < N; i++) {
    tempArr.length = 0;
    for (let j = 0; j < N; j++) {
      tempArr.push(matrix[N-(j+1)][i])
    }
    console.log(tempArr)
    arr.push(tempArr)
  }
  // console.log(arr)
}

const TEST = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  // [
  //   [1, 2, 3, 4],
  //   [5, 6, 7, 8],
  //   [9, 10, 11, 12],
  //   [13, 14, 15, 16],
  // ],
];

for (const elem of TEST) {
  rotateMatrix(elem);
}
