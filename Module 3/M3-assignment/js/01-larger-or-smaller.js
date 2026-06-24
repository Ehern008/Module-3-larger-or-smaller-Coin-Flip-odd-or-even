let num1
let num2

//Collect values from user


do {    
        num1 = parseFloat(prompt("Enter the first number: "))
    } while(isNaN(num1))

do {    
        num2 = parseFloat(prompt("Enter the second number: "))
    } while(isNaN(num2))
    
while (num1===num2) {
    num2 = parseFloat(prompt("That is the same number. Please select a different number: "))
}

 if(num1 > num2) {
     alert("The first number is larger")
} else  { 
    alert("The second number is larger")
}