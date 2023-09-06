function show(selectValue){
    var showResizeDiv = document.getElementById("resizeDiv");
    var showHexDiv = document.getElementById("hexDiv");
    var showOvalDiv = document.getElementById("ovalDiv");
    
    showResizeDiv.classList.remove("showDiv");
    showHexDiv.classList.remove("showDiv");
    showOvalDiv.classList.remove("showDiv");

    if(selectValue === "resize"){
        showResizeDiv.classList.add("showDiv");
        
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
    }

    if(selectValue === "hex"){
        showHexDiv.classList.add("showDiv");
        
        const hexInput = document.getElementById("sideLength")
        const hexOutput = document.querySelector("#hexResult")
        var hexAreaValue = 0
        hexOutput.value = hexAreaValue.toFixed(3)

        hexInput.addEventListener("keyup", (hexEvent)=>{
            
            hexAreaValue = (3*Math.pow(hexEvent.target.value, 2)*Math.sqrt(3))/2

            hexOutput.value = hexAreaValue.toFixed(3)
        })
    }

    if(selectValue === "oval"){
        showOvalDiv.classList.add("showDiv");
        
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
    }
}