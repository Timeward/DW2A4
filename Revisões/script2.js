const confirmClick = document.getElementById("confirm")
confirmClick.click();

function confirmEvent(){
    const VAL = document.querySelector("#valueAmount")
    const ARRVAL = Array.from({length: VAL.value}, () => Math.floor(Math.random() * 100));
    const LOW = document.querySelector("#low")
    const HIGH = document.querySelector("#high")
    const ABOVE = document.querySelector("#above")
    const BELOW = document.querySelector("#below")
    const AVRG = document.querySelector("#avg")
    
    let total = ARRVAL.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    AVRG.value = total/VAL.value

    LOW.value = Math.min(...ARRVAL)
    HIGH.value = Math.max(...ARRVAL)

    let higher = 0
    let lower = 0

    for(let i = 0; i<VAL.value; i++){
        if(ARRVAL[i]>AVRG.value){higher++}
        if(ARRVAL[i]<AVRG.value){lower++}
    }

    ABOVE.value = higher
    BELOW.value = lower
}