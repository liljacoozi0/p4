// jshint esversion: 7

var getWords = str => {
	return str.split(" ");
}

var makeSentence = function(arr){
	str = ""; //returning string
	for (var i=0;i<arr.length;i++){
		str+=arr[i]+" ";
}
return str;
}

let isDigit = ch => {

return ch.match(/[0-9]/g) == ch;

}

let isPunctuation = ch => {

return ch.match(/[.,;:!?]/g) == ch; 

}

let countPunctuation = s => {
	var count = 0;
	for(var i = 0;i < s.length;i++){
		if(isPunctuation(s[i])){
		 count = count + 1;

}
}
return count
}

var arrayAverage = (arr) => {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
};


var countAboveAverage = (arr) => {
    var count = 0;
    var average = arrayAverage(arr);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            ++count;
        }
    }
    return count;
};

function smallestNumber(arr){
	var min = arr[0];
	for(var i = 0;i < arr.length;i++){
		if(arr[i] < min) min = arr[i];
}
return min;
}

console.log(countPunctuation("If you build it,they will come!"));

console.log(getWords('alpha bravo delta'));

console.log(makeSentence(["When","I","was","your","age","television","was","called","books"]));

console.log(makeSentence(getWords('alpha bravo')));

console.log(isDigit("7"));

console.log(isDigit("!"));

console.log(isPunctuation("!"));

console.log(isPunctuation("k"));
let values = [31.9, 31.3, 42.4, 42.4, 60.8, 28.1];

console.log(arrayAverage(values));

console.log(countAboveAverage(values));
console.log(smallestNumber(values));