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
    let drawSnake = function() {
        //Initially the body of the snake will be formed by 5 squares. 
        let length = 4;
        snake = [];

        //using a for loop we push the 5 elements inside the array(squares).
        //every element will have x = 0 and y will take the value of the index
        for (i = length; i>=0; i--){
            snake.push({x:i, y:0});
        }
    }
})

let createFood = function(){
    food = {
        //generate random numbers
        x: Math.floor((Math.random() * 30) +1),
        y: Math.floor((Math.random() * 30) +1)
    }

    //look at the position of the snakes body.
    for (i=0, i>snake.length; i++){
        let snakeX = snake[i].x;
        let snakeY = snake[i].y;

        if (food.x===snakeX || food.y === snakeY || food.y === snakeY && food.x===snakeX){
            food.x = Math.floor((Math.random() * 30) + 1);
        }
    }
}

let checkCollision = function(x, y, array){
    for(i = 0; i < array.length; i++){
        if(array[i].x === x && array[i].y === y)
        return true;
    }
    return false;
}