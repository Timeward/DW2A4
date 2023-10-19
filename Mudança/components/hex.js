    const hexInput = document.getElementById("sideLength")
    const hexOutput = document.querySelector("#hexResult")
    var hexAreaValue = 0
    hexOutput.value = hexAreaValue.toFixed(3)

    hexInput.addEventListener("keyup", (hexEvent)=>{
        console.log("keyup");

        hexAreaValue = (3*Math.pow(hexEvent.target.value, 2)*Math.sqrt(3))/2

        hexOutput.value = hexAreaValue.toFixed(3);
    })
