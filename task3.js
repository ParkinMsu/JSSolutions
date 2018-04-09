const PopularWord = function(text){
	let tokens = text.split(/[ \s\t,.!?:;()]+/);

	let count_dict = {};
	for (let i in tokens){
		word = tokens[i];
		if (word === ''){
			continue;
		}
		count_dict[word] = count_dict[word] === undefined ? 1 : count_dict[word] + 1;
	};
	let max_len_words = [];
	let max_len = 0;
	for (let key of Object.keys(count_dict)){
		if (count_dict[key] > max_len){
			max_len_words = [key];
			max_len = count_dict[key];
		} else if (count_dict[key] === max_len) {
			max_len_words.push(key);
		}
	}
	if (max_len_words.length > 1){
		return '---';
	} else {
		return max_len_words[0];
	}
}


let test_text = 'Sed tempus ipsum quis eros tempus lacinia Cras finibus lorem ut lacinia egestas nunc nibh iaculis est convallis tincidunt mi mi sed nisl Sed porttitor aliquam elit ullamcorper tincidunt arcu euismod quis Mauris congue elit suscipit leo varius facilisis Cras et arcu sodales laoreet est vitae pharetra orci Integer eget nulla dictum aliquet justo semper molestie neque Maecenas bibendum lacus tincidunt auctor varius purus felis ullamcorper dui et laoreet ligula ex et risus Donec eget fringilla nibh Cras congue tincidunt accumsan Maecenas euismod eleifend elit ut rhoncus tortor sodales a Cras egestas finibus lorem non tempor tincidunt aera';
let test_result = PopularWord(test_text);
console.log(test_result);