function checkBrackets(string){
	let openBrackets = ['{', '[', '('];
	let closeBrackets = ['}', ']', ')'];
	let stack = [];
	for (let i = 0; i < string.length; i++){
		if (openBrackets.indexOf(string[i]) !== -1) {
			stack.push(string[i]);
		} else if (closeBrackets.indexOf(string[i]) !== -1){
			let closeBracketId = closeBrackets.indexOf(string[i]);
			let openBracketId = openBrackets.indexOf(stack.pop())
			if (closeBracketId !== openBracketId){
				return false;
			}
		}
	}
	if (stack.length > 0) {
		return false;
	}
	return true;
}

let test1String = '{[]({})}';
console.log(checkBrackets(test1String));
let test2String = '({[]({})}';
console.log(checkBrackets(test2String));