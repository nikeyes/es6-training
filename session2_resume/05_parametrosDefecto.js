function sayHello({
    name = 'Joan',
    surname = 'Leon'
} = {}) {
    console.log('Hello', name, surname);
}

sayHello();
