class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    
    toString() {
        return `(${this.x},${this.y})`; 
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }

    toString() {
        return `Color Point ${super.toString()} de color ${this.color}`;
    }
}

let colorPoint = new ColorPoint(2,3,'red');
console.log(colorPoint.toString());