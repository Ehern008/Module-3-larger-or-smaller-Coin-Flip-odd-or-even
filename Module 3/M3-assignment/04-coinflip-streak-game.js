alert("Hello and welcome to Coin Flip v.3! (Coin Streak)")

let coinFlip;

do {    
    coinFlip=0;
    coinFlip = Math.round(Math.random())    
    if (coinFlip == 0){ alert("HEADS")}
    else {alert("TAILS")}
    } while(coinFlip == 0)