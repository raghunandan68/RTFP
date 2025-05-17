let userScore=0;
let compScore=0;
let divs=document.querySelectorAll("#images");
let btn=document.querySelector("button");
divs.forEach((div)=>{
    div.addEventListener("click",()=>{
        const options=["rock","paper","scissor"];
        const randIndex=Math.floor(Math.random()*3);
        const userChoice=div.getAttribute("id");
        let compChoice=options[randIndex];
        if(userChoice=="rock"){
            if(compChoice=="paper"){
                compScore++;
                btn.innerHTML="You Lost!";
                btn.style.backgroundColor="red";
            }
            else if(compChoice="scissor"){
                userScore++;
                btn.innerHTML=`Your ${userChoice} beats ${compChoice}`;
                btn.style.backgroundColor="green";
            }
            else{
                btn.innerHTML="It's a draw!";
            }
        }
        else if(userChoice=="paper"){
            if(compChoice=="scissor"){
                compScore++;
                btn.innerHTML="You Lost!";
                btn.style.backgroundColor="red";
            }
            else if(compChoice="rock"){
                userScore++;
                btn.innerHTML=`Your ${userChoice} beats ${compChoice}`;
                btn.style.backgroundColor="green";
            }
            else{
                btn.innerHTML="It's a draw!";
            }
        }
        else{
            if(compChoice=="paper"){
                compScore++;
                btn.innerHTML="You Lost!";
                btn.style.backgroundColor="red";
            }
            else if(compChoice="scissor"){
                userScore++;
                btn.innerHTML=`Your ${userChoice} beats ${compChoice}`;
                btn.style.backgroundColor="green";
            }
            else{
                btn.innerHTML="It's a draw!";
            }
        }
        document.getElementById("userScore").innerText=userScore;
        document.getElementById("compScore").innerText=compScore;
    });
});
