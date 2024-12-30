document.addEventListener("DOMContentLoaded", () => {
    rockButton.addEventListener("click", () => start(rockButton));
    paperButton.addEventListener("click", () => start(paperButton));
    scissorButton.addEventListener("click", () => start(scissorButton));
    restartButton.addEventListener("click", () => restartGame());
    }
);
