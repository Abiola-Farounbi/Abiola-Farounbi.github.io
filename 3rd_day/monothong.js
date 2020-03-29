



let input=prompt("Enter in your word").toLowerCase()
let vowel=0;
const word =Array.from(input);
for(let i=0; i<word.length; i++){
   const letter=word[i]
   if(letter=="a" ||letter=="e" ||letter=="i" ||letter=="o" ||letter=="u"  ){
     vowel+=1
 }  

}

document.getElementById("display").innerText=`The number of vowels in ${input} is ${vowel} .`
