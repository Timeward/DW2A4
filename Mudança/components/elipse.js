const ovalInputA = document.querySelector("#radiusA")
const ovalInputB = document.querySelector("#radiusB")
const ovalOutput = document.querySelector("#ovalResult")
var ovalAreaValue = 0
ovalOutput.value = ovalAreaValue.toFixed(3);

function ovalEvent(){

    ovalAreaValue = Math.PI*ovalInputA.value*ovalInputB.value

    ovalOutput.value = ovalAreaValue.toFixed(3);
}

ovalInputA.addEventListener("keyup", ovalEvent)
ovalInputB.addEventListener("keyup", ovalEvent)