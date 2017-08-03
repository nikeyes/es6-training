class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    
    toString() {
        return `(${this.x},${this.y})`; 
    }
}

let p = new Point(1,2);
console.log(p.toString());

class Sample {
    constructor(value){
        this.value = value;
    }

    static staticMethod(){
        console.log("static!!");
    }

    prototypeMethod() {
        console.log("prototype!");
    }
}

Sample.staticMethod();
let ejemplo = new Sample('test');
ejemplo.prototypeMethod();