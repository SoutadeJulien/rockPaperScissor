const choices = ["rock", "paper", "scissor"]

const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorButton = document.querySelector(".scissorButton");
const restartButton = document.getElementById('restart');
const computerButton = document.querySelector(".computerButton");

let userScoreText = document.querySelector("#userScore span");
let cpScoreText = document.querySelector("#cpScore span");
let computerRock = document.getElementById('computerRock'); 
let userRock = document.getElementById('rockUser'); 
let computerPaper = document.getElementById('computerPaper'); 
let userPaper = document.getElementById('paperUser'); 
let computerScissor = document.getElementById('computerScissor'); 
let userScissor = document.getElementById('scissorUser'); 
let finalResult = document.getElementById('finalResult'); 
let roundNumberText = document.querySelector("#roundNumber span");
