function stringRotation(s1, s2) {
	// check both have same length
	if (s1.length != s2.length) return false;
	for (let index = 0; index < s2.length - 1; index++) {
		s2 = s2.substring(s2.length - 1) + s2.substring(0, s2.length - 1);
		if (s2 === s1) {
			return true;
		}
	}
	return false;
}

const TESTS = [
	["waterbottle", "ottlewaterb"],
	["water", "teraw"],
];

for (const elem of TESTS) {
	console.log(stringRotation(elem[0], elem[1]));
}
