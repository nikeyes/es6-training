//https://codepen.io/dandel/pen/LNYzdd

function runAnimation(position){
    console.log('Moving to position....', position);
}

runAnimation(0);



setTimeout(function() {
    runAnimation(1);
    setTimeout(function() {
        runAnimation(2);
    },1000)
});

function delay(interval) {
    return  new Promise(function(resolve){
        setTimeout(resolve, interval);
    });
};

runAnimation(0);
delay(1000)
    .then(function() {
        runAnimation(1);
        return delay(1000);
    })
    .then(function() {
        runAnimation(2);
    });