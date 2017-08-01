function drawCircle(options){
    options = options == undefined ? {} : options;
    let radius = options.radius === undefined ? 30 : options.radius;
    let coords = options.coords === undefined ? {x: 0, y: 0} : options.coords;

    //dibujar el círculo
    console.log(radius, coords);
}

drawCircle({radius:1});

function drawCircle2({radius = 30, coords = {x: 0, y: 0}} = {}){
    //dibujar el círculo
    console.log(radius, coords);
}

drawCircle2({radius:1});