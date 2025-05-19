let userScore = 0;
let compScore = 0;
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
    });
});
