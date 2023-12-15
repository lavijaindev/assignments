/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t1) {

    let p = new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, t1 * 1000);
    });
    return p;

}

function wait2(t2) {
    let p = new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, t2 * 1000);
    });
    return p;
}

function wait3(t3) {
    let p = new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, t3 * 1000);
    });
    return p;
}

function calculateTime(t1, t2, t3) {
    const startTime = Date.now();

    const waitcall1 =  wait1(t1);
    const waitcall2 =  wait2(t2);
    const waitcall3 =  wait3(t3);

    return Promise.all([waitcall1, waitcall2, waitcall3]).then(() => {
        const endTime = Date.now();
        const totalTime = endTime - startTime;
        return totalTime;
    });
}

module.exports = calculateTime;
