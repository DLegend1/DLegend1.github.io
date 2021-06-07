let counter = document.getElementById("counter");
document.getElementById("particles-js").onclick = code;
let wCode = 0;
let i = 0;
let intervalID;

// Theese are all the variables the player can buy
let nNeighbor=  0;
let nFriend =   0;
let nDacko  =   0;
let nUstijana = 0;
let nTuntev =   0;

//finds all the bought tags B stands for bought
let NeighbourBought =   document.getElementById("NeighbourBought");
let FriendBought =      document.getElementById("FriendBought");
let DackoBought =       document.getElementById("DackoBought");
let UstijanaBought =    document.getElementById("UstijanaBought");
let TuntevBought =      document.getElementById("TuntevBought");

//starts the infinite timer that activates the code every second
nSetInterval();

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

// Using the interval function in js we can make the program add code every second

function nBuy(id) {
    switch (id) {
        case 0:
            if (wCode >= 20) {
                nNeighbor++;
                NeighbourBought.innerText = `Bought: ${nNeighbor}` 
                wCode -= 20;

            } else{
                alert("You don't have enough code to buy this")
            }
            break;

        case 1:
            
            if (wCode >= 100) {
                nFriend++;
                FriendBought.innerText = `Bought: ${nFriend}` 
                wCode -= 100;

            } else{
                alert("You don't have enough code to buy this")
            }
            break;

        case 2:
            
            if (wCode >= 200) {
                nDacko++;
                DackoBought.innerText = `Bought: ${nDacko}` 
                wCode -= 200;

            } else{
                alert("You don't have enough code to buy this")
            }
            break;

        case 3:
            if (wCode >= 1000) {
                nUstijana++;
                UstijanaBought.innerText = `Bought: ${nUstijana}` 
                wCode -= 1000;

            } else{
                alert("You don't have enough code to buy this")
            }
            break;

        case 4:
            if (wCode >= 10000) {
                nTuntev++;
                TuntevBought.innerText = `Bought: ${nTuntev}` 
                wCode -= 10000;

            } else{
                alert("You don't have enough code to buy this")
            }
            break;

        default:
            break;
    }
}

function nSetInterval() {
    intervalID = setInterval(function(){
        wCode += (nNeighbor*1) + (nFriend*5) + (nDacko*15) + (nUstijana*45) + (nTuntev*150);
        counter.innerText = wCode;
    }, 1000)
    
}

function nClearInterval() {
    clearInterval(intervalID);
}