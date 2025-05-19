let userScore = 0;
let compScore = 0;
let gamePoint=5;
let divs = document.querySelectorAll("#images div"); 
let btn = document.querySelector("button");

divs.forEach((div) => {
    div.addEventListener("click", () => {
        const options = ["rock", "paper", "scissor"];
        const randIndex = Math.floor(Math.random() * 3);
        const userChoice = div.getAttribute("id");
        let compChoice = options[randIndex];

        if (userChoice === "rock") {
            if (compChoice === "paper") {
                compScore++;
                btn.innerHTML = "You Lost!";
                btn.style.backgroundColor = "red";
            } else if (compChoice === "scissor") {
                userScore++;
                btn.innerHTML = `Your ${userChoice} beats ${compChoice}`;
                btn.style.backgroundColor = "green";
            } else {
                btn.innerHTML = "It's a draw!";
                btn.style.backgroundColor="blue";
            }
        } else if (userChoice === "paper") {
            if (compChoice === "scissor") {
                compScore++;
                btn.innerHTML = "You Lost!";
                btn.style.backgroundColor = "red";
            } else if (compChoice === "rock") {
                userScore++;
                btn.innerHTML = `Your ${userChoice} beats ${compChoice}`;
                btn.style.backgroundColor = "green";
            } else {
                btn.innerHTML = "It's a draw!";
                btn.style.backgroundColor="blue";
            }
        } else if (userChoice === "scissor") {
            if (compChoice === "rock") {
                compScore++;
                btn.innerHTML = "You Lost!";
                btn.style.backgroundColor = "red";
            } else if (compChoice === "paper") {
                userScore++;
                btn.innerHTML = `Your ${userChoice} beats ${compChoice}`;
                btn.style.backgroundColor = "green";
            } else {
                btn.innerHTML = "It's a draw!";
                btn.style.backgroundColor="blue";
            }
        }

        document.getElementById("userScore").innerText = userScore;
        document.getElementById("compScore").innerText = compScore;

        if(userScore==gamePoint){
            btn.innerText="You won the game!"
            btn.style.backgroundColor="green";
            setTimeout(()=>{
                userScore=0;
                compScore=0;
                document.getElementById("userScore").innerText=userScore;
                document.getElementById("compScore").innerText=compScore;
                btn.innerText="Play Your Move";
                btn.style.backgroundColor="rgb(17,17,111)";
            },900);
        }
        else if(compScore==gamePoint){
            btn.innerText="You lost the game!";
            btn.style.backgroundColor="red";
            setTimeout(()=>{
                userScore=0;
                compScore=0;
                document.getElementById("userScore").innerText=userScore;
                document.getElementById("compScore").innerText=compScore;
                btn.innerText="Play Your Move";
                btn.style.backgroundColor="rgb(17,17,111)";
            },900);
        }
    });
});
