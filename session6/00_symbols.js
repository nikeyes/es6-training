/*const COLOR_RED = 'Red';
const COLOR_ORANGE = 'Orange';
const COLOR_YELLOW = 'Yellow';
const COLOR_BLUE = 'Blue';
const SKY_BLUE = 'Blue';
*/

const COLOR_RED = Symbol();
const COLOR_ORANGE = Symbol();
const COLOR_YELLOW = Symbol();
const COLOR_BLUE = Symbol();
const SKY_BLUE = Symbol();


function printColor(color){
    switch(color) {
        case COLOR_RED:
            console.log('Rojo');
            break;
        case COLOR_ORANGE:
            console.log('Naranja');
            break;
        case COLOR_YELLOW:
            console.log('Amarillo');
            break;
        case COLOR_BLUE:
            console.log('Blue');
            break;
        case SKY_BLUE:
            console.log('Azul cielo');
            break;
        default:    
            throw new  Exception('Unknown color: ' + color);
    }
}

printColor(COLOR_BLUE);
printColor(SKY_BLUE);


console.log(Symbol('foo'));
console.log(Symbol('foo').toString());

let myObj = {};
let fooSym = Symbol('foo');
let otherSym = Symbol('bar');


myObj['foo'] = 'bar';
myObj[fooSym] = 'baz';
myObj[otherSym] = 'bing';

console.log(myObj.foo == 'bar');
console.log(myObj[fooSym] === 'baz');
console.log(myObj[otherSym] === 'bing');

console.log(Object.keys(myObj));
console.log(Object.getOwnPropertySymbols(myObj));


const HOLA = 'hola';
const ADIOS = 'hola';

console.log(HOLA === ADIOS);

const HOLA2 = Symbol('hola');
const ADIOS2 = Symbol('hola');

console.log(HOLA2 === ADIOS2);
