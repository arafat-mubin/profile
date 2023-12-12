
// let btn1 =document.querySelector("#id-btn1");
// btn1.addEventListener("click",()=>{
//     console.log("you click 1st button")
//     alert("you click 1st button")
// })

// let btn2 =document.querySelector("#id-btn2");
// btn2.addEventListener("click",()=>{
//     console.log("you click 2nd button")
//     alert("you click 2nd button")
// })

// let btn3 =document.querySelector("#id-btn3");
// btn3.addEventListener("click",()=>{
//     console.log("you click 3rd button")
//     alert("you click 3rd button")
// })


let btn= document.querySelector("#id-btn1");
let currentMode = "light";



btn.addEventListener("click",()=>{
    if(currentMode === "light"){
        currentMode = "dark";
        document.querySelector("body").style.backgroundColor ="black"
        document.querySelector("#id-btn1").style.backgroundColor ="white"
        document.querySelector("#id-btn1").style.color ="black"

    }else{
        currentMode = "light";
        document.querySelector("body").style.backgroundColor ="white"
        document.querySelector("#id-btn1").style.backgroundColor ="black"
        document.querySelector("#id-btn1").style.color ="white"


    }
    // console.log(currentMode);
})