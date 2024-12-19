/* 2 var to track user score and computer score */
let user = 0;
let computer = 0;
/* to access all 3 buttons */
const choices = document.querySelectorAll(".choice");
/* creating random choice from comp side*/
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randInd = Math.floor(Math.random() * 3);
    return options[randInd];
}

const msg=document.querySelector(".msg-container");
const userscore=document.querySelector("#user");
const compscore=document.querySelector("#comp");


const drawGame = () => { console.log("game was draw");
    msg.innerText="Draw Game";
    msg.style.backgroundColor="#bb5511";


 }

/* Function to show winner and update score */
const showWinner = (userWin) => {
    if (userWin) {
        console.log("YOU WIN");
        msg.innerText="You Win!";
        msg.style.backgroundColor="green";
        user++;  // Increment user score
        userscore.innerText=user;
        
    } else {
        console.log("YOU LOSE");
        msg.innerText="You Lose";
        msg.style.backgroundColor="red";
        computer++;  // Increment computer score
        compscore.innerText=computer;
    }
}

/* Main function to play the game */
const playGame = (userchoice) => {
    console.log("User choice:", userchoice);
    
    // Generate computer choice
    const compchoice = genCompChoice();
    console.log("Computer choice:", compchoice);
    
    // Check for a draw
    if (userchoice === compchoice) {
        drawGame();
        return;
    }
    
    // Variable to track if user wins
    let userWin = false;

    // Check the win conditions for each choice
    if (userchoice === "rock") {
        // rock beats scissors
        if (compchoice === "scissors") {
            userWin = true;
        }
    } else if (userchoice === "paper") {
        // paper beats rock
        if (compchoice === "rock") {
            userWin = true;
        }
    } else if (userchoice === "scissors") {
        // scissors beats paper
        if (compchoice === "paper") {
            userWin = true;
        }
    }

    // Show the result based on the outcome
    showWinner(userWin);
}
/* making click work */
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});
