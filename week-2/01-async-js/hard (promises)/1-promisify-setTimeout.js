/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const time = n * 1000;
    let p = new Promise(function(resolve){
        setTimeout(() => {
            // let a = 0;
            // for(let i=0; i< 5; i++) {
            //     a = a+i;
            // }
            // resolve(a);
            resolve();
        },time);
    });
    return p;

}

wait(1).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

module.exports = wait;
