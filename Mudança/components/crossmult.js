const resizeInputA = document.querySelector("#inputA")
const resizeInputB = document.querySelector("#inputB")
const resizeInputC = document.querySelector("#inputC")
const resizeOutputD = document.querySelector("#outputD")
var resizeOutputValue = 0
resizeOutputD.value = resizeOutputValue.toFixed(3)

function resizeEvent(){
            
    resizeOutputValue = (resizeInputB.value*resizeInputC.value)/resizeInputA.value;
            
    if(isNaN(resizeOutputValue)){
        resizeOutputValue = 0
    }
            
    resizeOutputD.value = resizeOutputValue.toFixed(3);
}
          
resizeInputA.addEventListener("keyup", resizeEvent)
resizeInputB.addEventListener("keyup", resizeEvent)
resizeInputC.addEventListener("keyup", resizeEvent)