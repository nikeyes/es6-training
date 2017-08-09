import suma from './suma';

console.log(suma);
console.log(suma(2, 2));


import {suma_no_default, resta_no_default} from './suma_no_default';

console.log(suma_no_default);
console.log(suma_no_default(2, 2));
console.log(resta_no_default);


import modulo from './modulo_default_y_no_default';
console.log(modulo);
console.log(modulo(3,5));

import {saluda} from './modulo_alias.js';
console.log(saluda);
console.log(saluda('Hola'));

import Persona from './persona';
console.log(Persona);
let jorge = new Persona('Jorge', 'Castro');
console.log(jorge.getName());

import * as mates from './modulo_default_y_no_default';
console.log(mates);

