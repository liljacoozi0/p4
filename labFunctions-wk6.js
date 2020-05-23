// jshint esversion: 7

var toggleCase = function (s) {
    var r = '';
    var i = 0;
    //I decided to experiment with a while loop instead for practice
    while (i < s.length) {
        var n = s.charAt(i);
        if (n == n.toUpperCase()) {
            // make toLowerCase
            n = n.toLowerCase();
            r += n;
        } else {
            // make toUpperCases
            n = n.toUpperCase();
            r += n;
        }

        i += 1; 
    }
    return r;
};
console.log(toggleCase("Hello World")); // expect "hELLO wORLD"
console.log(toggleCase("77 Sunset String"));
// expect "77 sUNSET sTRIP"


var getAreaCode = function(s){
if(s[0] == "(" && s.length == 13){
	var r =s.substring(1,4);
	return r;
}
else{
	return "invalid format"
}
//"(###)###- ####" use substring to verify style and return as string ()-
};
console.log(getAreaCode("(503)333-5555")); // expect 503

var getAreaCode2 = function(s){
if(s[0] == "(" && s.length == 13){
	var r =s.substr(1,3);
	return r;
}
else{
	return "invalid format"
}
//"(###)###- ####" use substring to verify style and return as string ()-
};
console.log(getAreaCode2("(503)333-5555")); // expect 503

var isMathOperator = function(ch){
var dict = {
	"+":"add",
	"-": "subtract",
	"*": "multiply",
	"/": "divide",
	"%": "modulus"
}
if(ch in dict){
	return dict[ch];
}
else{
	return "Not a Math Operator";

}
};
console.log(isMathOperator("%"));
console.log(isMathOperator("test"));