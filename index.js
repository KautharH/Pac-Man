import { LEVEL, OBJECT_TYPE } from "./setup";

//DOM elements 
const gameGrid = documnet.querySelector('#game');
const scoreTable = document.querySelector('#score'); 
const startButton = document.querySelector('#start-button');

//Game constants 
const POWER_PILL_TIME = 10000; //milliseconds 
const GLOBAL_SPEED = 80; //milliseconds (speed for game loop)

//Initial setup 
let score = 0;
let timer = null; 
let gameWin = false;
let powerPillActive = false;
let poertPillTimer = null;

function gameOver(pacman, grid) {

}

function checkCollision(pacman, ghosts) {

}

function gameLoop(pacman, ghosts) {

}

function startGame() {

}