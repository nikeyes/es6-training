function* generatorFunction() {
    console.log('Hola');
    yield; //producir
    console.log('Adios');
}

let generadorObject = generatorFunction();
console.log(generadorObject.next());
console.log(generadorObject.next());
console.log(generadorObject.next());

function* abc(){
    yield 'a';
    yield 'b';
    yield 'c';
}

const abcObj = abc();
console.log(abcObj.next());
console.log(...abcObj);

for (const char of abc()) {
    console.log(char);
}

const alphabet = [...abc()];
console.log(alphabet);


function* contador() {
    let i = 0;
    while(i < 10) {
        i += 1;
        yield i;
    }
}

const contadorObject = contador();
console.log(...contadorObject);


const [a, b, c] = abc();
console.log(a);
console.log(b);
console.log(c);

class LoremIpsum {
    constructor (text) {
        this._text = text;
    }

    *words() {
        const re = /\S+/g;
        let match;
        while(match = re.exec(this._text)){
            yield match[0];
        }
    }
}

const palabras = new LoremIpsum('Hola este string es muy largo y quiero iterarlo');
for(let word of palabras.words()) {
    console.log(word);
} 



class Users{
    constructor(people){
        this._people = people;
    }
    *alias(){
        for(let person of this._people){
            yield person.sex === 'M' ? `Mr. ${person.name}`
                                     : `Mrs. ${person.name}`;
        }
    }
}

const users = new Users([
    { sex: 'M', name: 'John'},
    { sex: 'W', name: 'Lucia'}
]);

for (let person of users.alias()) {
    console.log(person);
}