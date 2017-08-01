const hello = 'hello';
const world = "World";
const escuelaIt = `Escuela It`;

const helloWorld = `${hello}, ${world}!!!`;

const sumas = `Dos y dos son ${2 + 2}`;

const sumaFunc = function (a,b) {
    return a + b;
};

const variasLineas = `Esto 
está en 
varias 
lineas`;


console.log(sumas);
console.log(sumaFunc(3,5));
console.log(variasLineas);

function raw(strings, ...values) {
  return strings.raw[0];
  // "linea 1 de cadena de texto \\n línea 2 de cadena de texto"
}

console.log(raw`Hello\n`);
console.log('next');


const tag = function (strings, args) {
   return strings.map(function(s){
        return s.split('').map(function(s){
            return `${s}.`;
        })
        .join('');
    }) .join('');
};

console.log(tag`Hello, World!`);

const dictionary = {
    es: {
            'days ago': 'hace %{count} dias'
    },
    en: {
            'days ago': '%{count} days ago'
    }
};

const i18n = function (strings, args){
    const key = strings.join('').trim();
    return dictionary[culture][key].replace('%{count}', args);
}

let culture = 'es';

console.log(i18n`${8} days ago`);
