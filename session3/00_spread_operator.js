const values = [1,2,3,4];

console.log(values);
console.log(...values);

function fspread(...args){
    return args.length;
}

console.log(fspread(1,2,3));

function suma(x, y, z){
    return x + y + z;
}

console.log(suma(...[1,2,3]));

const worker = {
    id: 123,
    name: 'John',
    surname: 'Woo',
    age: 35
};

const customize = function(worker){
    return {
        ...worker,
        fullname: `Mr./Mrs. ${worker.surname}, ${worker.name}`,
        age: `${worker.age} years old`
    }
}

console.log(customize(worker));