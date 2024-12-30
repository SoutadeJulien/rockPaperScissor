
function start(userElement) {
    // Block if the game is finished.
    let computerChoice = cpChoice(choices);
    let computerButton = getComputerButton(computerChoice);

    setChecked(userElement);
    setChecked(computerButton);
    
    switch(isStronger(userElement.getAttribute("gamerole"), computerChoice)) {
        case "equality":
            finalResult.textContent = "Equality";
            break;

        case true:
            finalResult.textContent = "You won";
            incrementScore(userScoreText);
            break;

        case false:
            finalResult.textContent = "You loose";
            incrementScore(cpScoreText);
            break;
    }

    setTimeout(() => uncheckButtons(userElement, computerButton), 1000);
    incrementScore(roundNumberText);

    // Check for the win
    if(+userScoreText.textContent === 3) {
        window.location.href = "./won.html";
    }
    else if(+cpScoreText.textContent === 3) {
        window.location.href = "./loose.html";
    };
}

function uncheckButtons(userElement, computerElement) {
    userElement.classList.remove("checked");
    computerElement.classList.remove("checked");
}
