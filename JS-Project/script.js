// // // let marks=[90,92,87,95,99];
// // // let resultArray=marks.filter((val)=>{
// // //     return val>90;
// // // })
// // // console.log(resultArray);

// // let button=document.createElement("button");
// // button.innerHTML="click me!";
// // button.style.backgroundColor="red";
// // button.style.color="white";
// // document.querySelector("body").prepend(button);

// // let paragraph=document.querySelector("p");
// // paragraph.classList.add("newPara");
// // paragraph.classList.remove("newPara");

// let body=document.querySelector("body");
// let para=document.querySelector("p");
// let div=document.querySelector("#child");
// div.addEventListener("click",()=>{
//     body.style.backgroundColor="black";
//     para.style.color="white";
// });
// div.addEventListener("dblclick",()=>{
//     body.style.backgroundColor="white";
//     para.style.color="black";
// })

let btn = document.querySelector(".reset");
let boxes = document.querySelectorAll(".box");
let turnO = true; 
const wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
btn.addEventListener("click", () => {
    for (let box of boxes) {  
        box.innerHTML = "";
        msg.innerHTML = "";
        box.disabled = false; 
    }
    turnO = true; 
    btn.innerText="Reset Game";
});
boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (box.innerHTML === "") { 
            box.innerHTML = turnO ? "O" : "X"; 
            turnO = !turnO; 
            box.disabled = true; 
            checkWinner();
        }
    });
});
const checkWinner=()=>{
    for(let pattern of wins){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3 && pos3==pos1){
                msg.innerText=`Congratualtions!Winner is ${pos1}`;
                setTimeout(()=>{
                    btn.innerText="New Game";
                },100);
            }
        }
    }
}
