const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Quisque efficitur id felis non ultricies. 
    Quisque blandit bibendum purus, at viverra nibh vehicula in. 
    Nunc lorem nulla, faucibus nec nunc sed, porttitor pulvinar erat. 
    Praesent id sodales velit. Praesent varius eleifend turpis, eu tincidunt felis sagittis ut. Sed sodales hendrerit nisi, non cursus ipsum iaculis eget. Pellentesque interdum sem nibh, eu iaculis libero porta non. 
    In faucibus felis ut dui convallis dictum.`;

console.log(lorem.startsWith('Lorem'));
console.log(lorem.endsWith('dictum.'));
console.log(lorem.includes('efficitur'));
console.log(lorem.startsWith('ipsum', 6));


console.log('x'.repeat(3));


console.log(Number.isInteger(25.00));
console.log(Number.isInteger(25.01));

console.log(Number.isNaN(NaN));

let items = new Array(1, 2);
console.log(items.length);
console.log(items[0]);
console.log(items[1]);

let items2 = new Array(2);
console.log(items2.length);
console.log(items2[0]);
console.log(items2[1]);

let items3 = Array.of(2);
console.log(items3.length);
console.log(items3[0]);
console.log(items3[1]);


function doSomething(){
    console.log(arguments);
    console.log(typeof arguments);
    let args = Array.from(arguments);
    console.log(args.map(a => a));
    console.log(typeof args);
}

doSomething(1, 2, 3, 'ggggg');


let numbers  = [25, 30, 35, 40, 45];
console.log(numbers.find( n => n > 30));
console.log(numbers.findIndex( n => n > 35));


let set = new Set();
set.add('foo');
console.log(set.has('foo'));
console.log(set.entries());
set.forEach( v=> console.log(v));
for(let item of set) {
    console.log(item);
}

let set2  = new Set(numbers);
console.log(set2);
console.log([...set2]);
console.log(...set2);


let myArray  = ['Array1', 'Array1', 'Array2', 'Array1'];
let mySet = new Set(myArray);
console.log(mySet);


//Strong Set -> Si guardamos referencia a un elemento del DOM
// y lo borramos en el Set sigue... ¿Posible MemoryLeak?
let set3 = new Set();
let key = {"a":'test'};

set3.add(key);
console.log(set3);

key = null;
console.log(set3);

//Weak Sets
let weakSet = new WeakSet();
let weakKey = {"a":'weak'};
let weakKey2 = {"a2":'weak2'};
weakSet.add(weakKey);
weakSet.add(weakKey2);

console.log(weakSet);
console.log(weakSet.has(weakKey));

weakKey = null;

console.log(weakSet.has(weakKey));


let course = new  Map();
course.set('title', 'Aprende JS');
course.set('sessions', '7');

console.log(course.get('title'));
console.log(course.get('sessions'));

let map = new Map();

let key1 = {};
let key2 = {};

map.set(key1, 5);
map.set(key2, 3);

console.log(map.get(key1));
console.log(map.get(key2));

let weakMap = new WeakMap();

weakMap.set(key1, 1);
weakMap.set(key2, 2);

console.log(weakMap.get(key1));

key1 = null;

console.log(weakMap.has(key1));