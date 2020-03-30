var input=prompt("Enter in your word") 
function palindrome(input){
    var word=input.toLowerCase().replace(/[\W_]/g,"");
    document.getElementById("display").innerText=` Check if " ${word} " is a palindrome `
    var reverse=word.split("").reverse().join("");
    if (word==reverse){
        document.getElementById("click").innerHTML="<h3> It is a palindrome</h3>" 
    }
    else{
        document.getElementById("clicks").innerHTML="<h3> It is  not a palindrome</h3>"
    }
}
palindrome(input)

