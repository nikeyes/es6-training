const echo = text => text;
console.log(echo('Hello, arrow function!'));

//ES5
var echo2 = function(text) {
    return text;
}

console.log(echo2('Bye, non-arrow functions!'));