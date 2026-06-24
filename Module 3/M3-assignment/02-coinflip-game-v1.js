alert("Hello and welcome to Coin Flip!")

let choice = prompt("Do you choose heads [h],  or tails [t]? ")     //store as choice
if (choice == "h"){                      
    alert("You chose heads")
}
else {
    alert("You chose tails")
}
//flip using random number generator
let randomNum = Math.round(Math.random())




 if(randomNum == 1) {                     //if number is 1, result == heads
     result=("h")                         // otherwise, result == tails
     alert("result is heads")
 }
 else{
     result=("t")
     alert("result is tails")
     }

 if(choice === result){
     alert("Congratulations! You win!")
 }
     else{
         alert("You Lose")
     }
