
setChecked = (element) => element.classList.add("checked");

cpChoice = (list) => list[Math.floor(Math.random() * list.length)];

incrementScore = (element) => element.textContent = +element.textContent + 1;

function getComputerButton(role) {
    switch (role) {
        case "rock":
            return computerRock;
        case "paper":
            return computerPaper;
        case "scissor":
            return computerScissor;
    }
}

function isStronger(userItem, cpItem) {
    // Gets if the userItem is stronger than the cpItem.
    if (userItem === cpItem) {
        return "equality";

    } else if (userItem === "rock" && cpItem === "paper") {
        return false;

    } else if (userItem === "paper" && cpItem === "rock") {
        return true;

    } else if (userItem === "scissor" && cpItem === "paper") {
        return true;

    } else if (userItem === "paper" && cpItem === "scissor") {
        return false;

    } else if (userItem === "rock" && cpItem === "scissor") {
        return true;

    } else if (userItem === "scissor" && cpItem === "rock") {
        return false;
    }
}

function restartGame() {
    cpScoreText.textContent = 0;
    userScoreText.textContent = 0;
    roundNumberText.textContent = 0;
    finalResult.textContent = "Please, make a choice";
}
