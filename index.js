function start()
{
const timer = document.getElementById('b');
const ho = document.getElementById('h')
const hoo = document.getElementById('m')
const hooo = document.getElementById('s')
const now = new Date();
const day = new Date("2028-07-21:00:00:00");
const curr = day-now;
const days = curr/(1000*60*60*24);
const hour = curr/(1000*60*60)%24;
const minute = curr/(1000*60)%60;
const second = curr/(1000)%60;
timer.innerHTML = Math.floor(days),Math.floor(hour);
ho.innerHTML = Math.floor(hour);
hoo.innerHTML = Math.floor(minute);
hooo.innerHTML = Math.floor(second);
}

setInterval(start,1000);
// const timer = document.getElementById('b');
// const ho = document.getElementById('h')
// const hoo = document.getElementById('m')
// const hooo = document.getElementById('s')
// timer.innerHTML = Math.floor(days),Math.floor(hour);
// ho.innerHTML = Math.floor(hour);
// hoo.innerHTML = Math.floor(minute);
// hooo.innerHTML = Math.floor(second);