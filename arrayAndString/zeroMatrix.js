function zeroMatrix(matrix) {
	const M = matrix.length;
	const N = matrix[0].length;
	let m, n;
	for (let i = 0; i < M; i++) {
		for (let j = 0; j < N; j++) {
			if (matrix[i][j] === 0) {
				m = i;
				n = j;
				break;
			}
		}
	}
	for (let index = 0; index < N; index++) {
		matrix[m][index] = 0;
	}
	for (let index = 0; index < M; index++) {
		matrix[index][n] = 0;
	}
    for (let index = 0; index < matrix.length; index++) {
        console.log(matrix[index])
    }
}

const TESTS = [
	// 1
	[
		[1, 2, 3, 4],
		[1, 2, 0, 4],
		[10, 20, 30, 40],
	],
];

for (const matrix of TESTS) {
	zeroMatrix(matrix);
}
