import { LEVEL, OBJECT_TYPE } from "./setup";
//Classes
import GameBoard from "./GameBoard";

//DOM elements 
const gameGrid = document.querySelector('#game');
const scoreTable = document.querySelector('#score'); 
const startButton = document.querySelector('#start-button');

//Game constants 
const POWER_PILL_TIME = 10000; //milliseconds 
const GLOBAL_SPEED = 80; //milliseconds (speed for game loop)
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);

//Initial setup 
let score = 0;
let timer = null; 
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;

function gameOver(pacman, grid) {

}

function checkCollision(pacman, ghosts) {

}

function gameLoop(pacman, ghosts) {

}

function startGame() {

}