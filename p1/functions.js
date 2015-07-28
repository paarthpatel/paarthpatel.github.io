/* 
cd into p1
git add . 
git commit -m "first commit"
git push origin p1-branch


*/


//project 1, req 2-A
var pluralizer = function(string){
var arr = string.split('');
var position = string.length - 1;

if (arr[position] == 'x' || arr[position] == 's'){
	arr.push('es');
}
else if  (arr[position] == 'y'){
	arr.splice(position, 1, 'ies');

}
else{
	arr.push('s');

}

var result = arr.join('');
return result;

}

//project 1, req 2-B

function countDivby3(n){
	var count=0;
	for(i=1;i<=n;i++){
	if(i%3==0){
		count++;
	}
}
return count
}

//Project 2, req 2-C

var reverseWords = function(string){
var arr = string.split(' ').reverse();
 
 var result = arr.join(' ');
 return result;
}



//project 1, req. 2-D

var isVowel = function(ch){
	var vowels = /[aeiouy]/i;
	//ch = ch.toLowerCase();
	return vowels.test(ch);
};

//project 1 req 2-E

var isConsonant = function(ch){
	var alpha = /[a-z]/i;
	var consonants = /[^aeiou]/i;
	return alpha.test(ch) && consonants.test(ch);
};


//project 1, req 2-F

var countVowelPrefixWords = function(string){
	var arr = string.split(' ');
	var position = (0,1);
	if (arr[position] = /[aeiouy]/i){
		count(arr[position])
	}

	return count;

}


function CountVowelPrefixWords(sent){
	var count = 0;
	var words = sent.split(" ");

for (var i=0; i<words.length; ++i)
	if(isVowel(word[0])
		&&
	isVowel(word[1]))
	++count;

return count


}

function startsWithTwoVowels
for (var i=0; i<words.length; ++i)

	if(isVowel(word[0])
		&&
	isVowel(word[1]))
	++count;
};