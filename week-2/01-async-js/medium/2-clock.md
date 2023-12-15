Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)



let currentTime = new Date();
function updateCounter() {

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const period = {hours} > 12 ? 'AM' : 'PM';

    currentTime.setSeconds(currentTime.getSeconds() + 1);

    const formattedDate = `${hours % 12 || 12}: ${minutes}: ${seconds}  ${period}`;
    
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(formattedDate);
   
}

setInterval(updateCounter,1000);
