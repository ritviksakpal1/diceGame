let randomNums1 = Math.floor(Math.random() * 6 + 1)
let randomNums2 = Math.floor(Math.random() * 6 + 1)
var myImg1 = document.getElementById("img1")
var myImg2 = document.getElementById("img2")
let imgName1 = "images/dice" + randomNums1 + ".png"
let imgName2 = "images/dice" + randomNums2 + ".png"
myImg1.setAttribute('src', imgName1)
myImg2.setAttribute('src', imgName2)

var results = document.getElementById("winner")
if (randomNums1 > randomNums2) {
    results.innerText = "🚩Player 1 Wins"
} else if (randomNums1 === randomNums2) {
    results.innerText = "🚩Draw🚩"
} else if (randomNums2 > randomNums1) {
    results.innerText = "Player 2 Wins🚩"
} else {
    results.innerText = "Error"
}
