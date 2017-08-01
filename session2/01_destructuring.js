const numbers = ['1', '2', '3'];

const one = numbers[0];
const two = numbers[1];
const three = numbers[2];

const [uno, dos, tres] = numbers;

console.log (one, two, three);
console.log (uno, dos, tres);

let ichi, ni, san;
[ichi, ni, san] = ['uno', 'dos', 'tres'];

console.log(ichi, ni, san);

function users() {
    return ['joan', 'carlos', 'david', 'dani'];
}

let [joan, carlos, david, dani] = users();
console.log(joan, carlos, david, dani);


let object = {oneo: 1, twoo: 2};

let {oneo, twoo} = object;

console.log(one, two);


function suma({a, b} = {}){
    return a + b;
};

const tree = 3;
const four = 4;
console.log(suma({b: four, a: tree}));

const a = 3;
const b = 4;
console.log(suma({b, a}));
