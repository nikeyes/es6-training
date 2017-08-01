var a = 'I am global';

function foo(){
    var b = 'I am local';
}

foo();

console.log('Existe en el contexto global?', !!a);
//console.log('Existe en el contexto global?', !!b);