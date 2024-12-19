function watcher()
{
const timer = document.getElementById('watch');
const now = new Date();
const time = now.toLocaleTimeString();
timer.innerHTML = time;
}

setInterval(watcher,1000);
const timer = document.getElementById('watch');
timer.style.fontSize = "200px";
timer.style.display = "flex";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";
// // timer.style.backgroundColor = "pink";
timer.style.height = "70vh";