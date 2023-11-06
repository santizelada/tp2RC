const age = parseInt(prompt("Type in your age: "))

if (age >= 18){
    alert("You are allowed to drive")
} else if (age < 18) {
    alert("You are not allowed to drive")
}else{
    alert("You've typed in an invalid character or value. Please try again")
}
