const result = document.querySelector(".result");

const numbers = document.querySelectorAll(".numBtn");

const clear = document.querySelector("#clear")

const adder = document.querySelector('.add');

let screen = ''
let calcNum_1 = 0;
let onMode = false

// const parser = (enty)=>{
//     if(typeof(enty) === "string"){
//         return parseInt(enty)
//     }
//     if(typeof(enty) === 'number'){
//         return String(enty)
//     }
// }

const refresher = ()=>{
    result.innerText = screen
    
}

for(let num of numbers){ //Number buttons behave
    num.addEventListener('click',()=>{
        screen = screen + num.innerText
        refresher()
        calcNum_1 = parseInt(result.innerText)
        console.log(calcNum_1)
        
    })
    }

clear.addEventListener('click',()=>{ //Clear btn behave
    screen =''
    refresher()
})

adder.addEventListener('click',()=>{
    calcNum_1 = calcNum_1 + calcNum_1;
    screen = String(calcNum_1)
    refresher()
})

