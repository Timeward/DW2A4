const buttonClick = document.getElementById("start")
buttonClick.click();

function startEvent(){
    const LEN = 20;
    const arr = Array.from({length: LEN}, () => Math.floor(Math.random() * 100));
    const generatedOutput = document.querySelector("#generated")
    const avgOutput = document.querySelector("#average")
    generatedOutput.value = arr
    let values = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    avgOutput.value = values/LEN
    console.log(values)
}


    