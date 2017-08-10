
const readonly = (target, name, descriptor) => {
    descriptor.writable = false;
    return descriptor;
};

class Person {
    constructor({first, last}) {
        this.first = first;
        this.last = last;
    }

    @readonly
    name() { return `${this.first} ${this.last}`}
}

const person = new Person( {
    first: 'Jorge',
    last: 'Castro'
});

console.log(person.name());
person.name = () => {return 'a'};