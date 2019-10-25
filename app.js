let mycanvas = document.getElementById("canvas");
let ctx = mycanvas.getContext('2d');
let snakeSize = 10;
let width = 350;
let height = 350;
let score = 0;
let snake;
let snakeSize = 10;
let food;

let drawModule = (function () {
    let bodySnake = function(x, y){
        //this is the single square
        ctx.fillStyle = "blue";
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        //this is the border of the square
        ctx.strokeStyle = "darkblue";
        ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    }
    let pizza = function(x, y) {
        //this is the border of the pizza
        ctx.fillStyle = "yellow";
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        //this is the single square
        ctx.fillStyle = "red";
        ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
    }
    let scoreText = function(){
        // How many pizzas did the snake eat
        let score_text = "Score: " + score;
        ctx.fillStyle = "blue";
        ctx.fillText(score_text, 145, h-5);
    }
})