let output = document.getElementById("output")
let passwordCount = document.getElementById("passwordCount")
let lowercaseSel = document.getElementById("lowercase")
let numberSel = document.getElementById("number")
let symbolSel = document.getElementById("symbol")
let button = document.getElementById("passowordGen")
let clipboard = document.getElementsByClassName("flipboard")[0]
button.addEventListener("click",passwordGenerator)
clipboard.addEventListener("click",copyText)
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let number =  "1234567890"
let symbol = "#@$%!_-?{}[]&^"
let finalOutput = ""
// let aa = " "
let count = 0
 
// function PasswordGenerating (passwordCount) {
// if(lowercaseSel.checked ){
//   finalOutput += lowerCase[ Math.floor(Math.random()*26)]
//   passwordCount -= 1
// }
// if(symbolSel.checked ){
//     finalOutput +=  symbol[Math.floor(Math.random()*10)]
//     passwordCount -= 1
// }
// if(numberSel){
//     finalOutput +=  number[Math.floor(Math.random()*10)]
//     passwordCount -= 1
// }
// console.log(finalOutput)
// return passwordCount
// }
// for (let i =0; i< passwordCount.value ; i++){
//     console.log(i)
//     if(count != passwordCount){
//  count = PasswordGenerating(passwordCount)
// }
// else{
//     break
// }
// console.log(count)
// }
// console.log(passwordCount.value)

function passwordGenerator (){

let result = ""


let randomPass =""
lowercaseSel.checked && (result += lowerCase)
numberSel.checked && (result +=  number)
symbolSel.checked && (result += symbol)

 for (let i =0; i<passwordCount.value; i++){
randomPass += result[Math.floor(Math.random()*result.length)]
 }
output.textContent = randomPass
}

function copyText (){
    navigator.clipboard.writeText(output.textContent).then(() => {
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!
        alert("Copied to clipboard");
    });
}
