


alert("Hello and welcome to Coin Flip v.2!")


let coinFlip;
let count = prompt("How many times do you want to flip the coin? ")


for(i=0; i < count; i++){
    let coinFlip = Math.round(Math.random())
    console.log(coinFlip)
}



if (coinFlip == 1){
   console.log("Heads")
}  else{ 
    console.log("Tails")
}
