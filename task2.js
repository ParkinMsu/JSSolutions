function Leaf(number, next_elem){
	this.number = number;
	this.next_elem = next_elem;
}
function List(){
	this.header;
	this.end;
	this.addLeaf = function(leaf) {
		if (this.end === undefined){
			this.header = leaf;
			this.end = leaf;
		} else {
			this.end.next_elem = leaf;
			this.end = leaf;
		};
	};
	this.findElem = function(number){
		let curr_elem = this.header;
		while (curr_elem !==undefined){
			if (curr_elem.number === number){
				return curr_elem;
			};
			curr_elem = curr_elem.next_elem;
		};
		return undefined;
	}
	this.deleteFirstElem = function(number){
		let curr_elem = this.header;
		if (curr_elem.number === number){
			this.header = curr_elem.next_elem;
			return;
		}
		while (curr_elem.next_elem !== undefined){
			if (curr_elem.next_elem.number === number){
				curr_elem.next_elem = curr_elem.next_elem.next_elem;
				if(curr_elem.next_elem === undefined){
					this.end = curr_elem;
				}
				return;
			}
			curr_elem = curr_elem.next_elem;
		}
	}
	this.String = function(){
		let result_string = '';
		let curr_elem = this.header;
		while (curr_elem.next_elem !== undefined){
			result_string += curr_elem.number + '->';
			curr_elem = curr_elem.next_elem;
		}
		result_string += curr_elem.number;
		return result_string;
	}
}

const number2list = function(number){
	let result_list = new List();
	result_list.addLeaf(new Leaf(number % 10));
	number = Math.trunc(number/10);
	while (number != 0){
		result_list.addLeaf(new Leaf(number % 10));
		number = Math.trunc(number/10);
	}
	return result_list;
};

const sum_two_number_lists = function(first_list, second_list){
	let one_in_mind = 0;
	let first_leaf = first_list.header, second_leaf = second_list.header;
	let result_list = new List();
	while (first_leaf !== undefined && second_leaf !== undefined){
		result_list.addLeaf(new Leaf((first_leaf.number + second_leaf.number + one_in_mind) % 10));
		one_in_mind = Math.trunc((first_leaf.number + second_leaf.number + one_in_mind) / 10);
		first_leaf = first_leaf.next_elem;
		second_leaf = second_leaf.next_elem;
	};
	if (first_leaf === undefined && second_leaf !== undefined){
		while (second_leaf !== undefined){
			if (second_leaf.number + one_in_mind < 10){
				result_list.addLeaf(new Leaf(second_leaf.number + one_in_mind));
			} else {
				result_list.addLeaf(new Leaf(0));
				one_in_mind = 1;
			}
			second_leaf = second_leaf.next_elem;
		}
	} else if (second_leaf === undefined && first_leaf !== undefined){
		while (first_leaf !== undefined){
			if (first_leaf.number + one_in_mind < 10){
				result_list.addLeaf(new Leaf(first_leaf.number + one_in_mind));
			} else {
				result_list.addLeaf(new Leaf(0));
				one_in_mind = 1;
			}
			first_leaf = first_leaf.next_elem;
		}
	}
	if (one_in_mind == 1){
		result_list.addLeaf(new Leaf(1));
	}
	return result_list;
};
//let a_1 = new Leaf(10);
//let a_2 = new Leaf(20);
//let a_3 = new Leaf(30);
//let l = new List();
//l.addLeaf(a_1);
//l.addLeaf(a_2);
//l.addLeaf(a_3);

//console.log(l);

//l.deleteFirstElem(30);
//console.log(l);

//let result_list = number2list(102);

let number1 = number2list(1);
let number2 = number2list(0);
let result_list = sum_two_number_lists(number1, number2);

console.log(result_list.String());