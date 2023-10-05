let result = "";

function random() {
    const generated = Math.floor(Math.random() * 1000);
    return generated;
}

function n1(funcCall){
    setTimeout(()=>{
        const generated = random();

        if(funcCall){
            if(generated < 100){
                random();
            }
            else{
                result = result + generated;
            }
            console.log(generated)
            funcCall()}
    }, 100);
}

function n2(funcCall){
    setTimeout(()=>{
        var generated = random();

        if(funcCall){
            if(generated > 100){
                generated = Math.floor(generated/10);
                result = result + generated;
            }
            else{
                result = result + generated;
            }
            console.log(generated)
            funcCall()}
    }, 100);
}

n1(() =>{
    n1(() =>{
        n1(() =>{
            n2(()=>{
                console.log(result)
            })
        })
    })
});