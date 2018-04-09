let s = '1001001';
let coef = s[0] == '1' ? -1 : 1;

let pow = 1;
let result_number = 0;
for (let i = s.length - 1; i >= 0; i--){
	if (s[i] !== '1' && s[i] !== '0'){
		result_number = undefined;
		break
	}
	let number = parseInt(s[i], 10);
	result_number += number * pow;
	pow *= 2;
}

console.log(result_number);