const echo = text => text;
console.log(echo('hello!'));

const resize = ({x, y}, radius) => {
    return {
        x: x * radius,
        y: y * radius
    };
};

console.log(resize({x:5,y:10}, 100));