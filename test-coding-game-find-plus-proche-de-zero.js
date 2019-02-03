// https://www.codingame.com/servlet/fileservlet?id=3548664076
// Read inputs from Standard Input (use readline()).
// Write outputs to Standard Output (use print()).

// we need Call 2 times to get value
//readline(); // dummy call :(
var values = '1 3 -18 -1 20 -20';//readline();
var output;
tabValues = values.split(' ');


function getAnswer(first, second) {
    var answer;
    
    if( Math.abs(first) == Math.abs(second) ) {
        answer = Math.sign(first) !== -1 ? first : second;
    } else {
        answer = first;
    }
    return answer;
}

// pas d'inputs
if(!tabValues.length) {
    output = 0;

// seulement 2 valeurs    
} else if (tabValues.length >= 2) {
    // on trie les valeurs
    tabValues.sort(function(a, b) {
        return Math.abs(a) > Math.abs(b)
    });
    console.log(tabValues);
    output = getAnswer(tabValues[0], tabValues[1]);
}

//log answer
console.log(output);
