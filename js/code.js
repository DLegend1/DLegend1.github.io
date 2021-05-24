counter = document.getElementById("counter");
document.getElementById("particles-js").onclick = code;
wCode = 0;
var i = 0;
var nteachers=0
var nfriendly = 0

document.body.addEventListener('mousedown',function(e){ 
	e.preventDefault(); 
}) 

// This code is an old code that added intervals needs to be changed
// function teachercounter() {
//     nteachers += 10;
//     clearInterval(teach);
//     var teach = setInterval("teacher(nteachers)", 2000);
// }

// function friendcounter() {
//     nfriendly += 1;
//     clearInterval(friendly);
//     let friendly = setInterval("teacher(nfriendly)", 2000);
// }

// function teacher(i) {
//     wCode = wCode + i;
//     counter.innerText = wCode;
// }

function code() {
    wCode++;
    counter.innerText = wCode;
}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
    document.getElementById("openNav").onclick = closeNav;
    document.getElementById("openNav").style.right = "500px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("openNav").onclick = openNav;
    document.getElementById("openNav").style.right = "0px";
}