## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

/*Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
*/
let counter = 0;
function upCounter() {
    counter++;
    console.log(counter);
    setTimeout(upCounter,1000);
}
upCounter();








































































(Hint: setTimeout)
