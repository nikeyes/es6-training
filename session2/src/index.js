const h1 = function (text) {
    const h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode(text));
    return h1;
};

document.body.appendChild(h1("Ejemplo de H1 dddd  fff"));
