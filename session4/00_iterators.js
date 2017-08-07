var numbers = [1, 2, 3, 4];
const numberiterator = numbers[Symbol.iterator]();
console.log(numberiterator.next());
console.log(numberiterator.next());
console.log(numberiterator.next());
console.log(numberiterator.next());
console.log(numberiterator.next());

class LoremIpsum{
    constructor(text){
        this._text = text;
    }

    [Symbol.iterator]() {
        const re = /\S+/g;
        const text = this._text;
        return {
            next() {
                const match = re.exec(text);
                if (match) {
                    return {value: match[0], done: false};
                }
                else {
                    return {value: undefined, done: true};
                }
            }
        }
    }
}

const palabras = new LoremIpsum('Hola este string es muy largo y quiero iterarlo');
for(let word of palabras) {
    console.log(word);
}


